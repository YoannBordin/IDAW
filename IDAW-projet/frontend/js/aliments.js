let aliments = [];
let maxId = 1;
let currentId = 1;

let editMode = false;

$(document).ready(function(){
    $('#alimentForm').submit(function(event){
        event.preventDefault();
        
        let form = $(this);
        let serial = form.serialize();
        serial += `&id=${currentId}`;

        addAliment();

        console.log(currentId, editMode);
        
        if(editMode){
            $.ajax({
                type: "POST",
                url: "../backend/editAliment.php",
                data: serial,
                success: function(data)
                {
                    console.log(data); // show response from the php script.
                }
            });
                
            editMode = false;
        }
        else{
            $.ajax({
                type: "POST",
                url: "../backend/addAliment.php",
                data: serial,
                success: function(data)
                {
                    console.log(data); // show response from the php script.
                }
            });

            maxId++;
        }
    });
});

function addAliment(){

    let aliment = {
        id : currentId,
        name : $('#inputName').val(),
        type : $('#inputType').val(),
        calories : $('#inputCal').val(),
        water : $('#inputWater').val(),
        sugar : $('#inputSugar').val(),
        salt : $('#inputSalt').val(),
    };

    let crud = `
        <button id='delButton${currentId}' onClick='deleteRow(${currentId});'>Supprimer</button>
        <button id='editButton${currentId}' onClick='editRow(${currentId});'>Editer</button>`;

    if(editMode){
        aliments[currentId -1] = aliment;

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
    currentId = maxId;
}

function deleteRow(id){
    $(`#row${id}`).remove();

    let id_serial = `id=${id}`;
    $.ajax({
        type: "POST",
        url: "../backend/deleteAliment.php",
        data: id_serial,
        success: function(data)
        {
            console.log(data); // show response from the php script.
        }
 });
    
}

function editRow(id){
    editMode = true;
    currentId = id;

    let aliment = aliments[id -1];
    console.log(aliments);

    $('#inputName').val(aliment.name);
    $('#inputType').val(aliment.type);
    $('#inputCal').val(aliment.calories);
    $('#inputWater').val(aliment.water);
    $('#inputSugar').val(aliment.sugar);
    $('#inputSalt').val(aliment.salt);
}