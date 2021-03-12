<div class="menu">
    <div class="navigation">
        <h2>Navigation</h2>
    </div>
    <nav class="menuelement">

<?php
    function renderMenuToHTML($currentPageId, $lang){
        echo "<ul>";

        $menu = array(
            'accueil' => array('fr' => 'Accueil', 
                               'en' => 'Homepage'),
            'cv' => array('fr' => 'CV', 
                          'en' => 'CV'),
            'hobbies' => array('fr' => 'Passions', 
                               'en' => 'Hobbies'),
            'contact' => array('fr' => 'Contact', 
                               'en' => 'Contact')
        );

        foreach($menu as $pageId => $pageParams){
            echo "<li><a ";

            if($pageId == $currentPageId){
                echo "id=\"current\" ";
            }
            
            echo "href=\"index.php"
            echo "?page=$pageId"
            echo "&lang=$lang\">";
            echo "$pageParams[$lang]"
            
            echo"</a></li>";        
        }

        echo "</ul></nav>";
    }
?>

</div>