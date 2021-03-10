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
            <h1>Accueil</h1>
        </div>
        <div class="content">
            <div class="menu">
                <div class="navigation">
                    <h2>Navigation</h2>
                </div>
                <nav class="menuelement">
                    <ul>
                        <li><a id="current" href="index.php">Accueil</a></li>
                        <li><a href="cv.php">CV</a></li>
                        <li><a href="hobbies.php">Hobbies</a></li>
                    </ul>
                </nav>

            </div>
            <div class="text">
                <p>Bienvenue sur mon site professionnel !</p>
            </div>
        </div>
        <?php
            require_once('template_footer.php');
        ?>
    </section>
</body>

</html>