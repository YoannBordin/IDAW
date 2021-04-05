<?php

initAccueil();

function initAccueil(){
    require_once('config.php');

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = 
        "SELECT
            repas.date,
            SUM(aliment.calories*composer.quantite)/100,
            SUM(aliment.eau*composer.quantite)/100,
            SUM(aliment.sucre*composer.quantite)/100,
            SUM(aliment.sel*composer.quantite)/100
        FROM repas
            JOIN composer ON repas.id_repas = composer.id_repas
            JOIN aliment ON composer.id_aliment = aliment.id
        GROUP BY repas.date";
        
    $result = mysqli_query($connect, $query);

    $array = array();
    while($row = mysqli_fetch_row($result)){
        array_push($array, $row);
    }
    echo json_encode($array, JSON_UNESCAPED_UNICODE);

    mysqli_close($connect); 
}