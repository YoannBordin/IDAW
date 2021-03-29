<?php
    // test
    print_r( $_POST );

    /* 
    if(requestValid()){
        sendPostToDB();
    } else {
        echo "Please enter a valid user";
    }*/

    function requestValid(){
        return ($_POST['surname'] != "" && 
                $_POST['birth'] != "");
    }

    function sendPostToDB(){
        $servername = "localhost";
        $username = "root";
        $password = "";

        // Create connection
        $connect = mysqli_connect($servername, $username, $password);

        // Check connection
        if (!$connect) {
            die("Connection failed: " . mysqli_connect_error());
        }
        echo "Connected successfully";

        $query = 
            "INSERT INTO "
        mysqli_query($connect, $query);

        mysqli_close($connect); 
    }
