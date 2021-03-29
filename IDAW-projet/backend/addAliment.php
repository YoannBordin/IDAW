<?php

print_r($_POST);
addAlimentToDB();

function addAlimentToDB(){
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
        "INSERT INTO aliment(id, name, type, calories, water, sugar, salt) 
        VALUES (".
            $_POST['id'].",".
            "'".$_POST['name']."',".
            "'".$_POST['type']."',".
            "'".$_POST['calories']."',".
            "'".$_POST['water']."',".
            "'".$_POST['sugar']."',".
            "'".$_POST['salt']."')";
            
    echo $query;
    mysqli_query($connect, $query);

    mysqli_close($connect); 
}