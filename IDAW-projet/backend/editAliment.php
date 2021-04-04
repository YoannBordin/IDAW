<?php

print_r($_POST);
editAlimentFromDB();

function editAlimentFromDB(){
    require_once('config.php');

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = 
        "UPDATE aliment 
        SET nom=       '". $_POST['name']      ."', 
            categorie=       '". $_POST['type']      ."',
            calories=   '". $_POST['calories']  ."',
            eau=      '". $_POST['water']     ."',
            sucre=      '". $_POST['sugar']     ."',
            sel=       '". $_POST['salt']      ."'
        WHERE id=".$_POST['id'];
            
    echo $query;
    mysqli_query($connect, $query);

    mysqli_close($connect); 
}