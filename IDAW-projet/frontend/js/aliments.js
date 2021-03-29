let aliments = [];
let maxId = 1;
let currentId = 1;

let editMode = false;

function addAliment(){
    event.preventDefault();

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

        editMode = false;
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

        maxId++;
    }

    $('#alimentForm')[0].reset();
    currentId = maxId;
}

function deleteRow(id){
    $(`#row${id}`).remove();
    
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