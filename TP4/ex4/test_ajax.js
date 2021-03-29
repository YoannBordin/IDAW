$(document).ready(function(){
    //Lors du clic sur le bouton...
    $("#serial").click(function(){
        /*Transforme les données du formulaire en chaine de requête de la forme
        prenom=pierre&mail=pierre.giraud%40edhec.com*/
        let chaine = $("#addStudentForm").serialize();

        /*Transforme les données du formulaire en un tableau d'objets de la forme 
        [
        {
            name : "prenom",
            value : "pierre"
            },
            {
            name : "mail",
            value : "pierre.giraud@edhec.com"
            }
        ]*/
        let tb = $("#addStudentForm").serializeArray();
        
        //Affiche les résultats dans la console
        console.log(chaine);
        console.log(tb);
    });

    $("#addStudentForm").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
        let form = $(this);
        
        $.ajax({
               type: "POST",
               url: "addUser.php",
               data: form.serialize(), // serializes the form's elements.
               success: function(data)
               {
                   console.log(data); // show response from the php script.
               }
             });
    
        
    });
});

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
            <td onclick="editText(this);">${req}</td>
            <td>${crud}</td>
        </tr>`);
}

function deleteRow(buttonDel){
    $(buttonDel).closest('tr').remove();
}

function editText(cell){
    let text = $(cell).text();
    let input = `<input type="text" class="form-control" value=${text} id="input">`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        setEnterEvent(event, cell);
    });
}

function editDate(cell){
    let text = $(cell).text();
    let input = `<input type="date" class="form-control" value=${text} id="input">`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        setEnterEvent(event, cell);
    });
}

function editMenu(cell){
    let text = $(cell).text();
    let input = 
        `<select type="text" class="form-control" value=${text} id="input" >
            <option value = "Oui">Oui</option>
            <option value = "Non">Non</option>
        </select>`;

    $(cell).replaceWith(input);

    $('#input').on('keyup', function(event){
        setEnterEvent(event, cell);
    });
}

function setEnterEvent(event, cell) {
    if (event.key === 'Enter') {
        let entry = $('#input').val();

        $(cell).text(entry);
        $('#input').replaceWith(cell);
    }
}