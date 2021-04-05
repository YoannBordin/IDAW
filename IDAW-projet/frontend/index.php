<?php
    require_once('header.php');
    setTitle('Accueil');
    setPage("index.php");
?>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="js/index.js" async></script>
    </head>

    <body>
    
    <h1 class="ms-3 mb-3">Récapitulatif de la journée</h1>

    <div class="mb-3 ms-3 row">
        <div class="col-sm-1 fs-5">
            <label>Calories</label>
        </div>
        <div id="entryAccueil1" class="col-sm-3"></div>
    </div>
    <div class="mb-3 ms-3 row">
        <div class="col-sm-1 fs-5">
            <label>Eau</label>
        </div>
        <div id="entryAccueil2" class="col-sm-3"></div>
    </div>
    <div class="mb-3 ms-3 row">
        <div class="col-sm-1 fs-5">
            <label>Sucre</label>
        </div>
        <div id="entryAccueil3" class="col-sm-3"></div>
    </div>
    <div class="mb-3 ms-3 row">
        <div class="col-sm-1 fs-5">
            <label>Sel</label>
        </div>
        <div id="entryAccueil4" class="col-sm-3"></div>
    </div>

<?php
    require_once("footer.php");
?>