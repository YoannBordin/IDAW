let user = {
    login : "",
    name : "",
    surname : "",
    gender : "",
    sport : "",
    age : ""
}

$(document).ready(function () {
    loadProfileData();
});

function loadProfileData(){
    $.ajax({
        type: "POST",
        url: "../backend/getProfil.php",
        data: null,
        success: function(data){
            console.log(data);

            let jsonData = JSON.parse(data);

            user.login = jsonData[0][0];
            user.name = jsonData[0][1];
            user.surname = jsonData[0][2];
            user.gender = jsonData[0][3];
            user.sport = jsonData[0][4];
            user.age = jsonData[0][5] + " - " + jsonData[0][6] + " ans";

            addDataToDisplay();
        }
    });
}

function addDataToDisplay(){
    $('#entryLogin').append(`<p>${user.login}</p>`);
    $('#entryName').append(`<p>${user.name}</p>`);
    $('#entrySurname').append(`<p>${user.surname}</p>`);
    $('#entryGender').append(`<p>${user.gender}</p>`);
    $('#entrySport').append(`<p>${user.sport}</p>`);
    $('#entryAge').append(`<p>${user.age}</p>`);
}