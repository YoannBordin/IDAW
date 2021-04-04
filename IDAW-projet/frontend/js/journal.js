let alimentsList = [];
let repasList = [];

let editMode = false;
let maxId = 1;
let currentId = 1;
let selectId = 1;

$(document).ready(function () {
    loadForm();
    getRepasListFromDB();

    $('#addButton').on('click', function(event){
        event.preventDefault();
        selectId ++;

        addAlimentToForm();
        $(`#selectAliment${selectId}`).select2();
    })

    $('#repasForm').submit(function(event){
        event.preventDefault();
        
        if(editMode){
            editRepasList();
            editTable();
            editDB();
        }
        else{
            setNextId(maxId);

            addRepasToList();
            addRepasToTable();
            addRepasToDB();

            setNextId(maxId ++);
        }

        clearForm();

        maxId ++;
        currentId = maxId;
        selectId = 1;
    });
});

function addRepasToDB(){
    let i = 0;
    while(repasList[i].id != currentId){
        i++;
    }

    let serial = repasList[i];

    $.ajax({
        type: "POST",
        url: "../backend/addRepas.php",
        data: serial
    });
}

function editDB(){
    let i = 0;
    while(repasList[i].id != currentId){
        i++;
    }

    let serial = repasList[i];

    $.ajax({
        type: "POST",
        url: "../backend/editRepas.php",
        data: serial,
        success: function(data){
            console.log(data);
        }
    });
}

function getRepasListFromDB(){
    $.ajax({
        type: "POST",
        url: "../backend/initJournal.php",
        data: null,
        success: function(data)
        {
            console.log(data); // show response from the php script.
            let jsonData = JSON.parse(data);
            console.log(jsonData);

            addToList(jsonData);
            addToTable();   

            console.log(repasList);
        }
    });
}

function addToTable(){
    let index = 0;
    let id = 0;

    while(index < repasList.length){
        let repas = repasList[index];

        let rowStr = `<tr id="row${repas.id}">`;
        rowStr += `<td>${repas.date}</td>`;
        rowStr += `<td>${repas.time}</td>`;

        rowStr += `<td>${repas.aliments[0][0]}`;
        for(let i = 1; i < repas.aliments.length; i++){
            rowStr += `<br>${repas.aliments[i][0]}`;
        }

        rowStr += `</td><td>${repas.aliments[0][1]}`;
        for(let i = 1; i < repas.aliments.length; i++){
            rowStr += `<br>${repas.aliments[i][1]}`;
        }
        rowStr += `</td>`;
        
        rowStr += 
            `<td>
                <button id='editButton${repasList[index][0]}' onClick='editRepas(${repas.id});'>Editer</button>
            </td>`;
        rowStr += `</tr>`;

        $("#journalTableBody").append(rowStr);

        index++;
    }
}

function addToList(data){
    let index = 0;
    let id = 0;
    while(index < data.length){
        if(id != data[index][0]){
            id = data[index][0];

            let repas = {
                id : parseInt(id),
                date : data[index][1],
                time : data[index][2],
                aliments : [[data[index][3], data[index][4]]]
            }

            repasList.push(repas);
        }
        else{
            addAlimentToRepas(id, data[index][3], data[index][4]);
        }

        index++;
    }
}

function addAlimentToRepas(id_repas, aliment, quantity){
    let i = 0;
    while(repasList[i].id != id_repas){
        i++
    }
    repasList[i].aliments.push([aliment, quantity]);
}

function editRepasList(){
    let repas = getRepas(currentId);

    repas.date = $('#inputDate').val();
    repas.time = $('#inputTime').val();
    repas.aliments = [];

    for(let i = 1; i <= selectId; i++){
        repas.aliments.push([
            $(`#selectAliment${i}`).val(),
            $(`#inputQuantity${i}`).val()
        ]);
    }

    for(let i = 0; i < repasList.length; i++){
        if(repasList[i].id == currentId){
            repasList[i] = repas;
            
            console.log(repasList[i]);
        }
    }
}

function editTable(){
    let repas = getRepas(currentId);

    let rowStr = `<tr id="row${currentId}">
            <td>${repas.date}</td>
            <td>${repas.time}</td>`;

            rowStr += `<td>${repas.aliments[0][0]}`;
            for(let i = 1; i < repas.aliments.length; i++){
                rowStr += `<br>${repas.aliments[i][0]}`;
            }
    
            rowStr += `</td><td>${repas.aliments[0][1]}`;
            for(let i = 1; i < repas.aliments.length; i++){
                rowStr += `<br>${repas.aliments[i][1]}`;
            }
            rowStr += `</td>`;

            rowStr += `<td><button id='editButton${currentId}' onClick='editRepas(${currentId});'>Editer</button></td>
        </tr>`;

    $(`#row${currentId}`).replaceWith(rowStr);
}

function addRepasToTable(){
    let repas = getRepas(currentId);

    let tr = `<tr id="row${currentId}">`;

    tr += `<td>${repas.date}</td>`;
    tr += `<td>${repas.time}</td>`;

    tr += `<td>${repas.aliments[0][0]}`;
    for(let i = 1; i < repas.aliments.length; i++){
        tr += `<br>${repas.aliments[i][0]}`;
    }

    tr += `</td><td>${repas.aliments[0][1]}`;
    for(let i = 1; i < repas.aliments.length; i++){
        tr += `<br>${repas.aliments[i][1]}`;
    }
    tr += `</td>`;

    tr += `<td><button id='editButton${currentId}' onClick='editRepas(${currentId});'>Editer</button></td>
</tr>`;

    tr += `<td><button id='editButton${currentId}' onClick='editRepas(${currentId});'>Editer</button></td>`;

    tr += "</tr>";
    $('#journalTableBody').append(tr);
}

function getRepas(id){
    for(let i = 0; i < repasList.length; i++){
        let repas = repasList[i];
        if(repas.id == id){
            return repas;
        }
    }
    return null;
}

function editRepas(id){
    editMode = true;
    currentId = id;

    console.log(id);
    console.log(repasList);

    let repas = getRepas(id);
    $('#inputDate').val(repas.date);
    $('#inputTime').val(repas.time);

    let aliments = repas.aliments;
    $(`#selectAliment1`).val(aliments[0][0]).trigger('change');
    $(`#inputQuantity1`).val(aliments[0][1]);
    selectId = aliments.length;

    if(aliments.length >= 2){
        for(let i = 2; i <= aliments.length; i++){
            let div = 
            `<div class='form-group row' id='divAlim${i}'>
                <label for="aliment${i}">Aliment ${i}</label>
                <select id="selectAliment${i}" name="aliment${i}">
                    <option>Choisir un Aliment</option>
                </select>

                <input type="text" class="form-control" name="quantity${i}" id="inputQuantity${i}">
                <label for="quantity${i}">(g ou mL)</label>
            </div>`;

            $('#repasForm').append(div);
            $(`#divAlim${i}`).insertBefore('#addButton');
            $(`#selectAliment${i}`).select2();

            for(let alim = 0; alim < alimentsList.length; alim++){
                $(`#selectAliment${i}`).append("<option>" + alimentsList[alim] + "</option>");
            }

            console.log(aliments, i-1);

            $(`#selectAliment${i}`).val(aliments[i-1][0]).trigger('change');
            $(`#inputQuantity${i}`).val(aliments[i-1][1]);
        }
    }
    
    console.log(id);
}

function clearForm(){
    $('#repasForm')[0].reset();
    $(`#selectAliment1`).val("Choisir un aliment").trigger('change');
    if(selectId >= 2){
        for(let i = 2; i <= selectId; i++){
            $(`#divAlim${i}`).remove();
        }
    }   
}

function addRepasToList(){
    let repas = {
        id : currentId,
        date : $('#inputDate').val(),
        time : $('#inputTime').val(),
        aliments : []
    };
    for(let i = 1; i <= selectId; i++){
        repas.aliments.push([
            $(`#selectAliment${i}`).val(),
            $(`#inputQuantity${i}`).val()
        ]);
    }
    repasList.push(repas);
    console.log(repasList);
}

function addAlimentToForm(){
    let div = `<div class='mb-3 ms-1 row' id='divAlim${selectId}'>`;

        div += `<div class="col col-sm-2">
                    <label for="aliment${selectId}">Aliment ${selectId}</label>
                </div>
                <div class="col col-sm-3">
                    <select id="selectAliment${selectId}" name="aliment${selectId}" class="form-select">
                        <option>Choisir un Aliment</option>`;
        div += `    </select>
                </div>
                <div class="col col-sm-1">
                    <input type="text" class="form-control" name="quantity${selectId}" id="inputQuantity${selectId}">
                </div>
                <div class="col col-sm-1">
                    <label for="quantity${selectId}">(g ou mL)</label>
                </div>`;
    div += "</div>";

    $('#repasForm').append(div);
    $(`#divAlim${selectId}`).insertBefore('#addButton');

    for(let i = 0; i < alimentsList.length; i++){
        $(`#selectAliment${selectId}`).append("<option>" + alimentsList[i] + "</option>");
    }
}

function loadForm(){
    $.ajax({
        type: "POST",
        url: "../backend/initJournalSelect.php",
        data: null,
        success: function(data)
        {
            console.log(data); // show response from the php script.
            let jsonData = JSON.parse(data);

            for(let i = 0; i < jsonData.length; i++){
                alimentsList.push(jsonData[i][0]);
            }

            addAlimentToForm();
            $(`#selectAliment${selectId}`).select2();
        }
    });
}

function setNextId(current){
    maxId = current;
    while(isIdExisting(maxId)){
        maxId ++;
    }
    currentId = maxId;
}

function isIdExisting(id){
    for(let i = 0; i < repasList.length; i++){
        if(repasList[i]['id'] == id){
            return true;
        }
    }

    return false;
}