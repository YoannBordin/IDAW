<?php
    require_once("template_header.php");
    
    $currentPageId = 'accueil';
    $currentLang = 'fr';
    
    // _GET : Array contenant les paramètres passés en URL
    if(isset($_GET['page'])) {
        $currentPageId = $_GET['page'];

        if(isset($_GET['lang'])){
            $currentLang = $_GET['lang'];
        }
    }
?>

<header class="bandeau_haut">
    <h1 class="titre">Yoann BORDIN</h1>
</header>

<?php
    require_once("template_menu.php");
    renderMenuToHTML($currentPageId, $currentLang);
?>

<section class="corps">
    <?php
        $pageToInclude = $currentPageId . "_$currentLang.php";
        
        if(is_readable($pageToInclude)){
            require_once($pageToInclude);
        }
        else{
            require_once("error.php");
        }
    ?>
</section>

<?php
    require_once("template_footer.php");
    setLanguage($currentLang);
?>