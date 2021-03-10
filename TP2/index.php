<!DOCTYPE html>
<html>

<head>
    <title>Heure courante</title>
    <meta charset="utf-8">
</head>
<body>
    Nous sommes le :
    <?php
        echo date("d/m/Y");
    ?>
    <br>
    <?php
        function bonjour(){
            echo 'Bonjour !<br>';
        }

        function add(...$numbers){
            $sum = 0;
            foreach($numbers as $n){
                $sum += $n;
            }
            return $sum;
        }

        bonjour();
        echo add(1,2,3,6);
        echo "<br>";

        $tab = array(25,45,31,78,12);
        foreach($tab as $value){
            echo $value, " ";
        }
        echo "<br>";
    ?>

    
</body>

</html>