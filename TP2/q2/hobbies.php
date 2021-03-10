<!DOCTYPE html>
<html>

<head>
    <?php
        require_once('template_header.php');
    ?>
</head>

<body>
    <section class="principal-area fill-height">
        <div class="title">
            <h1>Hobbies</h1>
        </div>
        <div class="content">
            <div class="menu">
                <div class="navigation">
                    <h2>Navigation</h2>
                </div>
                <nav class="menuelement">
                    <ul>
                        <li><a href="index.php">Accueil</a></li>
                        <li><a href="cv.php">CV</a></li>
                        <li><a id="current" href="hobbies.php">Hobbies</a></li>
                    </ul>
                </nav>

            </div>
            <div class="text">
              <h2>Sports</h2>
              <ul>
                <li>Escalade</li>
                <li>Tennis de table</li>
                <li>Ski de piste</li>
                <li>Alpinisme</li>
              </ul>
        
              <h2>Loisirs</h2>
              <ul>
                <li>Jeux vidéos</li>
                <li>Dessin</li>
                <li>Bandes dessinées</li>
                <li>Sieste</li>
              </ul>
            </div>
        </div>
        
        <?php
             require_once('template_footer.php');
        ?>

    </section>
</body>

</html>