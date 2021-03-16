<?php
    $u_pseudo = '';
    $u_login = '';
    $u_pwd = '';

    if(isset($_POST['login']) 
    && isset($_POST['password'])
    && isset($_POST['pseudo'])){
        $u_pseudo = $_POST['pseudo'];
        $u_login = $_POST['login'];
        $u_pwd = $_POST['password'];
    }

    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $db_name = 'tp3';
    
    try{
        $dbco = new PDO("mysql:host=$servername;dbname=$db_name", $username, $password);
        $dbco -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO infos_user(login,password,pseudo)
                VALUES('$u_login','$u_pwd','$u_pseudo')";
        $dbco -> exec($sql);
        echo 'Entrée ajoutée';
    }

    catch(PDOException $e){
        echo "Erreur : " . $e->getMessage();
    }
?>