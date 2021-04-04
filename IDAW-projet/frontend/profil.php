<?php
    require_once('header.php');
    setTitle('Profil');
    setPage("profil.php")
?>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="js/profil.js" async></script>
    </head>

    <body>
        <h1 class="ms-3 mb-5">Profil</h1>

        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Login</label>
            </div>
            <div id="entryLogin" class="col-sm-3"></div>
        </div>
        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Nom</label>
            </div>
            <div id="entryName" class="col-sm-3"></div>
        </div>
        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Prénom</label>
            </div>
            <div id="entrySurname" class="col-sm-3"></div>
        </div>
        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Sexe</label>
            </div>
            <div id="entryGender" class="col-sm-3"></div>
        </div>
        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Pratique sportive</label>
            </div>
            <div id="entrySport" class="col-sm-3"></div>
        </div>
        <div class="mb-3 ms-1 row">
            <div class="col-sm-2 fs-5">
                <label>Tranche d'âge</label>
            </div>
            <div id="entryAge" class="col-sm-3"></div>
        </div>

<?php
    require_once("footer.php");
?>