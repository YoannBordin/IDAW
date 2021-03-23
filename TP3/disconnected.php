<!DOCTYPE html>
<html>
    <head></head>

    <body>
        <?php
            session_start();
            echo "<p>Utilisateur ".$_SESSION['login']." déconnecté";
            echo "<br><a href='login.php'>Page de connexion</a>";

            session_unset();
            session_destroy();
        ?>
    </body>
</html>