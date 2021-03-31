let alimentsList = [];
let repasList = [];

let editMode = false;
let maxId = 1;
let currentId = 1;
let selectId = 1;

$(document).ready(function () {
    getAlimentsFromDB();

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
        }
        else{
            addRepasToList();
            addRepasToTable();
        }

        clearForm();

        maxId ++;
        currentId = maxId;
        selectId = 1;
    });
});

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

    $(`#row${currentId}`).replaceWith(
        `<tr id="row${currentId}">
            <td>${repas.date}</td>
            <td>${repas.time}</td>
            <td><button id='editButton${currentId}' onClick='editRepas(${currentId});'>Editer</button></td>
        </tr>`
    );
}

function addRepasToTable(){
    let repas = getRepas(currentId);

    let tr = `<tr id="row${currentId}">`;

    tr += `<td>${repas.date}</td>`;
    tr += `<td>${repas.time}</td>`;
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
                <label for="aliment">Aliment ${i}</label>
                <select id="selectAliment${i}">
                    <option>Choisir un Aliment</option>
                </select>

                <input type="text" class="form-control" name="quantity" id="inputQuantity${i}">
                <label for="quantity">(g ou mL)</label>
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
    console.log(repas);

    repasList.push(repas);
}

function addAlimentToForm(){
    let div = `<div class='form-group row' id='divAlim${selectId}'>`;

        div += `<label for="aliment">Aliment ${selectId}</label>
                <select id="selectAliment${selectId}">
                    <option>Choisir un Aliment</option>`;

        div += `</select>

        <input type="text" class="form-control" name="quantity" id="inputQuantity${selectId}">
        <label for="quantity">(g ou mL)</label>`;
    div += "</div>";

    $('#repasForm').append(div);
    $(`#divAlim${selectId}`).insertBefore('#addButton');

    for(let i = 0; i < alimentsList.length; i++){
        $(`#selectAliment${selectId}`).append("<option>" + alimentsList[i] + "</option>");
    }
}

function getAlimentsFromDB(){
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