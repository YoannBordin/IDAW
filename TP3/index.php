<!DOCTYPE html>
<html>
    <head>
        <title>Cookie</title>

        <?php
            $style = "style1";

            if(isset($_GET['css'])){
                $style = $_GET['css'];
            }
            else if(isset($_COOKIE['css'])){
                $style = $_COOKIE['css'];
            }

            echo "<link ";
            echo "rel='stylesheet' ";
            echo "href='$style.css'>";
        ?>

        <meta charset="utf-8">
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