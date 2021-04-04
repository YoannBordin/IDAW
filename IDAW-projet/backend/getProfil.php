<?php

getProfil();

function getProfil(){
    require_once('config.php');

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = 
        "SELECT login, nom, prenom, sexe, pratique, lim_basse, lim_haute
        FROM utilisateur JOIN tranche_age ON utilisateur.tranche_age = tranche_age.id_tranche
        WHERE login='$user_login'";
    $result = mysqli_query($connect, $query);

    $array = array();
    while($row = mysqli_fetch_row($result)){
        array_push($array, $row);
    }
    echo json_encode($array, JSON_UNESCAPED_UNICODE);

    mysqli_close($connect); 
}