<?php

print_r($_POST);
deleteAlimentFromDB();

function deleteAlimentFromDB(){
    $servername = "localhost";
    $dbname = "projet";
    $username = "root";
    $password = "";

    // Create connection
    $connect = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully\n";

    $query = 
        "DELETE FROM aliment
        WHERE id=".$_POST['id'];
            
    echo $query;
    mysqli_query($connect, $query);

    mysqli_close($connect); 
}