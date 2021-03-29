let aliments = []
let maxId = 1;
let currentId = 1;

let editMode = false;

$(document).ready(function(){

    getAlimentsFromDB();

    $('#alimentForm').submit(function(event){
        event.preventDefault();
        
        
        let form = $(this);
        let serial = form.serialize();

        addAliment();
        
        if(editMode){
            serial += `&id=${currentId}`;

            $.ajax({
                type: "POST",
                url: "../backend/editAliment.php",
                data: serial
            });
                
            editMode = false;
        }
        else{
            setNextId(maxId);
            serial += `&id=${currentId}`;
            $.ajax({
                type: "POST",
                url: "../backend/addAliment.php",
                data: serial
            });

            setNextId(maxId++);
        }
    });
});

function addAliment(){
    let aliment = createAliment([
        currentId,
        $('#inputName').val(),
        $('#inputType').val(),
        $('#inputCal').val(),
        $('#inputWater').val(),
        $('#inputSugar').val(),
        $('#inputSalt').val()
    ]);

    let crud = `
        <button id='delButton${currentId}' onClick='deleteRow(${currentId});'>Supprimer</button>
        <button id='editButton${currentId}' onClick='editRow(${currentId});'>Editer</button>`;

    if(editMode){
        setAliment(currentId, aliment);

        $(`#row${currentId}`).replaceWith(
            `<tr id="row${currentId}">
                <td>${aliment.name}</td>
                <td>${aliment.type}</td>
                <td>${aliment.calories}</td>
                <td>${aliment.water}</td>
                <td>${aliment.sugar}</td>
                <td>${aliment.salt}</td>
                <td>${crud}</td>
            </tr>`
        );

    }
    else{
        aliments.push(aliment);
        
        $("#alimentTableBody").append(
            `<tr id="row${currentId}">
                <td>${aliment.name}</td>
                <td>${aliment.type}</td>
                <td>${aliment.calories}</td>
                <td>${aliment.water}</td>
                <td>${aliment.sugar}</td>
                <td>${aliment.salt}</td>
                <td>${crud}</td>
            </tr>`
        );
    }

    $('#alimentForm')[0].reset();
}

function deleteRow(id){
    $(`#row${id}`).remove();

    let id_serial = `id=${id}`;
    $.ajax({
        type: "POST",
        url: "../backend/deleteAliment.php",
        data: id_serial
 });
    
}

function editRow(id){
    editMode = true;
    currentId = id;

    let aliment = getAliment(id);

    $('#inputName').val(aliment.name);
    $('#inputType').val(aliment.type);
    $('#inputCal').val(aliment.calories);
    $('#inputWater').val(aliment.water);
    $('#inputSugar').val(aliment.sugar);
    $('#inputSalt').val(aliment.salt);
}

function getAlimentsFromDB(){
    $.ajax({
        type: "POST",
        url: "../backend/initAliment.php",
        data: null,
        success: function(data)
        {
            console.log(data); // show response from the php script.
            let jsonData = JSON.parse(data);

            for(let i = 0; i < jsonData.length; i++){

                let rowStr = `<tr id="row${jsonData[i][0]}">`;
                for(let j = 1; j < jsonData[0].length; j++){
                    rowStr += `<td>${jsonData[i][j]}</td>`;
                }
                rowStr += 
                    `<td>
                        <button id='delButton${jsonData[i][0]}' onClick='deleteRow(${jsonData[i][0]});'>Supprimer</button>
                        <button id='editButton${jsonData[i][0]}' onClick='editRow(${jsonData[i][0]});'>Editer</button>
                    </td>`;
                rowStr += `</tr>`;

                $("#alimentTableBody").append(rowStr);

                jsonData[i][0] = parseInt(jsonData[i][0]);
                let aliment = createAliment(jsonData[i]);
                aliments.push(aliment);
            }
        }
    });
}

function createAliment(args){
    let aliment = {
        id : args[0],
        name : args[1],
        type : args[2],
        calories : args[3],
        water : args[4],
        sugar : args[5],
        salt : args[6]
    };

    return aliment;
}

function setNextId(current){
    maxId = current;
    while(isIdExisting(maxId)){
        maxId ++;
    }
    currentId = maxId;
}

function isIdExisting(id){
    for(let i = 0; i < aliments.length; i++){
        if(aliments[i]['id'] == id){
            return true;
        }
    }

    return false;
}

function getAliment(id){
    for(let i = 0; i < aliments.length; i++){
        let aliment = aliments[i];
        
        if(aliment.id == id){
            return aliment;
        }
    }
    return null;
}

function setAliment(id, aliment){
    for(let i = 0; i < aliments.length; i++){
        if(aliments[i].id == id){
            aliments[i] = aliment;
        }
    }
}