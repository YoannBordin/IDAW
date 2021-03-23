<?php
    $style = "style1";

    if(isset($_GET['css'])){
        $style = $_GET['css'];
    }
    else if(isset($_COOKIE['css'])){
        $style = $_COOKIE['css'];
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Cookie</title>
        <meta charset="utf-8">

        <?php
            echo "<link rel='stylesheet' href='$style.css'>";
        ?>
    </head>
    <body>
        <?php
            session_start();

            echo "<p>Style sélectionné : ";

            if(isset($_GET['css'])){
                echo $_GET['css'];
                setcookie('css', $_GET['css']);
            }
            else if(isset($_COOKIE['css'])){
                echo $_COOKIE['css'];
            }
            else{
                echo "aucun";
            }

            echo "</p>";

            if(isset($_SESSION['login'])){
                echo "<p>Session : ". $_SESSION['login'] ."</p>";
                echo "<a href='disconnected.php'>Déconnexion</a>";
            }
            else{
                echo "Pas de session ouverte<br>";
                echo "<a href='login.php'>Page de connexion</a>";
            }
            
            
        ?>
    </body>
</html>