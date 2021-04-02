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
        "UPDATE repas
        SET date='".    $_POST['date']."',
            heure='".   $_POST['time']."'
        WHERE id_repas=".$_POST['id'];

    mysqli_query($connect, $queryRepas);

    for($i = 0; $i < count($_POST['aliments']); $i++){
        $queryComposer =
            "UPDATE composer
            SET id_aliment=(SELECT id FROM aliment WHERE name='".$_POST['aliments'][$i][0]."'),
                quantite='".    $_POST['aliments'][$i][1]."'
            WHERE id_repas=".$_POST['id']; // AND id_aliment

        echo $queryComposer;
        mysqli_query($connect, $queryComposer);
    }
    
    mysqli_close($connect); 
}