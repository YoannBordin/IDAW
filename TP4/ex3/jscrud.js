function onFormSubmit() {
    // prevent the form to be sent to the serverevent.
    event.preventDefault();

    let name = $("#inputName").val();
    let surname = $("#inputSurname").val();
    let birth = $("#inputBirth").val();
    let like = $("#inputLike").val();
    let req = $("#inputReq").val();

    let crud = `<input type='button' value='Supprimer' onclick='deleteRow(this)'>`;

    $("#studentsTableBody").append(
        `<tr>
            <td onclick="editText(this);">${name}</td>
            <td onclick="editText(this);">${surname}</td>
            <td onclick="editDate(this);">${birth}</td>
            <td onclick="editMenu(this);">${like}</td>
            <td>${req}</td>
            <td>${crud}</td>
        </tr>`);
}

function deleteRow(buttonDel){
    $(buttonDel).closest('tr').remove();
}

//<table><tbody><tr><td onclick="edit(this);">Test</td></tr></tbody></table>
        //<script>

        //</script>

function editText(cell){
    let text = $(cell).text();
    let input = `<input type="text" class="form-control" value=${text} id="input">`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        if(event.key === 'Enter'){
            let entry = $('#input').val();

            $(cell).text(entry);
            $('#input').replaceWith(cell);
        }
    });
}

function editDate(cell){
    let text = $(cell).text();
    let input = `<input type="date" class="form-control" value=${text} id="input">`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        if(event.key === 'Enter'){
            let entry = $('#input').val();

            $(cell).text(entry);
            $('#input').replaceWith(cell);
        }
    });
}

function editMenu(cell){
    let text = $(cell).text();
    let input = 
        `<select type="text" class="form-control" id="input" >
            <option value = "Oui">Oui</option>
            <option value = "Non">Non</option>
        </select>`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        if(event.key === 'Enter'){
            let entry = $('#input').val();

            $(cell).text(entry);
            $('#input').replaceWith(cell);
        }
    });
}