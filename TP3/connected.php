<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$db_name = 'tp3';

try{
    $dbco = new PDO("mysql:host=$servername;dbname=$db_name", $username, $password);
    $dbco -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    /*Sélectionne toutes les valeurs dans la table users*/
    $sth = $dbco->prepare("SELECT * FROM infos_user");
    $sth->execute();

    /*Retourne un tableau associatif pour chaque entrée de notre table
        *avec le nom des colonnes sélectionnées en clefs*/
    $users = $sth->fetchAll(PDO::FETCH_ASSOC);
}

catch(PDOException $e){
    echo "Erreur : " . $e->getMessage();
}

$pseudo = "Anonymous";
$login = "anonymous";
$errorText = "";
$successfullyLogged = false;

if(isset($_POST['login']) && isset($_POST['password'])) {
    $tryLogin=$_POST['login'];
    $tryPwd=$_POST['password'];

// si login existe et password correspond
    foreach($users as $entry){
        if($entry['login'] == $tryLogin 
        && $entry['password'] == $tryPwd){
            
            $successfullyLogged = true;
            $login = $tryLogin;
            $pseudo = $entry['pseudo'];
        }
    }
    if(!$successfullyLogged){
        $errorText = "Erreur de login/password";
    }
}
else {
    $errorText = "Merci d'utiliser le formulaire de login";
}

if(!$successfullyLogged) {
    echo $errorText;
} else {
    echo "<h1>Bienvenu ".$pseudo."</h1>";
    echo "<p>Login : $login</p>";

    session_start();
    $_SESSION['login'] = $login;
}

?>