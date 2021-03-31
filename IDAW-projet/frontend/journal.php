<?php
    require_once('header.php');
    setTitle('Journal');
?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
        <script src="js/journal.js" async></script>
    </head>

    <body>
        <table class="table" id="journalTable">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Heure</th>
                    <th scope="col">Opérations</th>
                </tr>
            </thead>
            <tbody id='journalTableBody' >

            </tbody>
        </table>

        <h1>Ajouter un repas</h1>
        
        <form id="repasForm">
            <div class="form-group row">
                <label for="date">Date</label>
                <input type="date" class="form-control" name="name" id="inputDate">
            </div>
            <div class="form-group row">
                <label for="time">Heure</label>
                <input type="time" class="form-control" name="type" id="inputTime">
            </div>
    
            <button id="addButton">Ajouter un aliment</button>

            <div class="form-group row">
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </body>

</html>