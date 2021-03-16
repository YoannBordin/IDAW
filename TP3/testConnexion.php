<!DOCTYPE html>
<html>
    <head>
        <title>Test Connexion</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1>Bases de données MySQL</h1>  
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
                $resultat = $sth->fetchAll(PDO::FETCH_ASSOC);
            
                /*print_r permet un affichage lisible des résultats,
                 *<pre> rend le tout un peu plus lisible*/
                echo '<pre>';
                print_r($resultat);
                echo '</pre>';
            }

            catch(PDOException $e){
                echo "Erreur : " . $e->getMessage();
            }
        ?>
    </body>
</html>