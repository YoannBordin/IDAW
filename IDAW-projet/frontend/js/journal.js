let aliments = [];
let selectId = 1;

$(document).ready(function () {
    getAlimentsFromDB();

    $('#addButton').on('click', function(event){
        event.preventDefault();
        selectId ++;

        addRow();
        $(`#selectAliment${selectId}`).select2();
    })

    $('#repasForm').submit(function(event){
        event.preventDefault();

        addRepasToTable();
    });
});

function addRepasToTable(){
    let date = $('#inputDate').val();
    let time = $('#inputTime').val();

    let tr = "<tr>";

    tr += `<td>${date}</td>`;
    tr += `<td>${time}</td>`;

    tr += "</tr>";
    $('#journalTableBody').append(tr);
}

function addRow(){
    let div = `<div class='form-group row' id='divAlim${selectId}'>`;

        div += `<label for="aliment">Aliment ${selectId}</label>
                <select id="selectAliment${selectId}">
                    <option>Choisir un Aliment</option>`;

        div += `</select>

        <input type="text" class="form-control" name="quantity" id="inputQuantity">
        <label for="quantity">g / mL</label>`;
    div += "</div>";

    $('#repasForm').append(div);
    $(`#divAlim${selectId}`).insertBefore('#addButton');

    for(let i = 0; i < aliments.length; i++){
        $(`#selectAliment${selectId}`).append("<option>" + aliments[i] + "</option>");
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
                aliments.push(jsonData[i][0]);
            }

            addRow();
            $(`#selectAliment${selectId}`).select2();
        }
    });
}