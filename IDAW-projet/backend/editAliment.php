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
        "UPDATE aliment 
        SET name=       '". $_POST['name']      ."', 
            type=       '". $_POST['type']      ."',
            calories=   '". $_POST['calories']  ."',
            water=      '". $_POST['water']     ."',
            sugar=      '". $_POST['sugar']     ."',
            salt=       '". $_POST['salt']      ."'
        WHERE id=".$_POST['id'];
            
    echo $query;
    mysqli_query($connect, $query);

    mysqli_close($connect); 
}