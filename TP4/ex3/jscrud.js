function onFormSubmit(){
    // prevent the form to be sent to the server
    event.preventDefault();

    let IDs = ["name", "surname", "birth", "like"];
    let table = document.getElementById("table");
    let row = table.insertRow(1);

    for(let i = 0; i < IDs.length; i++){
        let cell = row.insertCell(i);
        let text = document.createTextNode(document.getElementById(IDs[i]).value);
        cell.appendChild(text);
    }
}