<?php
    function renderMenuToHTML($currentPageId, $lang){
        echo "<div class='navigation'><h2>";
            if($lang == 'fr'){
                echo "Navigation";
            }
            else{
                echo "Browse";
            }
        echo "</h2></div>";

        echo "<nav class = menu>";

        $menu = array(
            'accueil' => array('fr' => 'Accueil', 
                               'en' => 'Homepage'),
            'cv' => array('fr' => 'CV', 
                          'en' => 'CV'),
            'hobbies' => array('fr' => 'Loisirs', 
                               'en' => 'Hobbies'),
            'contact' => array('fr' => 'Contact', 
                               'en' => 'Contact')
        );

        foreach($menu as $pageId => $pageParams){
            echo "<hr class='menu'>";
            echo "<nav class = menuelement>";
            echo "<a ";

            if($pageId == $currentPageId){
                echo "id=\"current\" ";
            }
            
            echo "href=\"index.php";
            echo "?page=$pageId";
            echo "&lang=$lang\" ";
            echo "class=menu>";
            echo "$pageParams[$lang]";
            
            echo"</a></nav>";
            
            if($pageId == 'contact'){
                echo "<hr class='menu'>";
            }
        }

        echo "</nav>";
    }
?>