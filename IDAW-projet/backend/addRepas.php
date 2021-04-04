<?php

print_r($_POST);
addRepasToDB();

function addRepasToDB(){
    require_once('config.php');

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $queryRepas = 
        "INSERT INTO repas(id_repas, date, heure) 
        VALUES (".
            $_POST['id'].",".
            "'".$_POST['date']."',".
            "'".$_POST['time']."')";

    mysqli_query($connect, $queryRepas);

    for($i = 0; $i < count($_POST['aliments']); $i++){
        $queryComposer =
            "INSERT INTO composer(id_repas, id_aliment, quantite)
            VALUES (".
                $_POST['id'].",".
                "(SELECT id FROM aliment WHERE nom='".$_POST['aliments'][$i][0]."'),".
                "'".$_POST['aliments'][$i][1]."')";

        echo $queryComposer;
        mysqli_query($connect, $queryComposer);
    }
    
    mysqli_close($connect); 
}