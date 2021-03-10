<!DOCTYPE html>
<html>

<head>
</head>
<body>
    <div class="menu">
        <div class="navigation">
            <h2>Navigation</h2>
        </div>
        <nav class="menuelement">
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="cv.php">CV</a></li>
                <li><a href="hobbies.php">Hobbies</a></li>
            </ul>
        </nav>
    </div>

    <?php
        function renderMenuToHTML($currentPageId){
            // Tableau définissant la structure du site
            $menu = array(
                'index' => array('Accueil'),
                'cv' => array('CV'),
                'hobbies' => array('Hobbies')
            );

            foreach($menu as $pageId => $pageParameters){
                echo $pageParameters[0], '<br>';
            }
        }
    ?>
</body>

</html>