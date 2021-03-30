<?php

print_r($_POST);
deleteAlimentFromDB();

function deleteAlimentFromDB(){
    require_once('config.php');

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $query = 
        "DELETE FROM aliment
        WHERE id=".$_POST['id'];
            
    echo $query;
    mysqli_query($connect, $query);

    mysqli_close($connect); 
}