<?php
    require_once('header.php');
    setTitle('Journal');
    setPage("journal.php");
?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script src="js/journal.js" async></script>
    </head>

    <body>
        <h1 class="ms-3">Historique</h1>

        <table class="table table-striped" id="journalTable">
            <thead>
                <tr>
                    <th scope="col" class="table-primary date">Date</th>
                    <th scope="col" class="table-primary time">Heure</th>
                    <th scope="col" class="table-primary aliment">Aliment</th>
                    <th scope="col" class="table-primary quantity">Quantité (g ou mL)</th>
                </tr>
            </thead>
            <tbody id='journalTableBody' >

            </tbody>
        </table>

        <h1 class="ms-3">Ajouter un repas</h1>
        
        <form id="repasForm">
            <div class="mb-3 ms-1 row">
                <label for="date" class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-3">
                    <input type="date" class="form-control" name="date" id="inputDate">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="time" class="col-sm-2 col-form-label">Heure</label>
                <div class="col-sm-3">
                    <input type="time" class="form-control" name="time" id="inputTime">
                </div>
            </div>
            <div class="mb-3 ms-1 row" id="addButton">
                <div class="col-sm-3">
                    <button class="btn btn-light">Ajouter un aliment</button>
                </div>
            </div>

            <div class="row w-75 mx-auto">
                <input type="submit" value="Envoyer">
            </div>
        </form>

<?php
    require_once("footer.php");
?>