<?php
    require_once('header.php');
    setTitle('Aliments');
    setPage("aliments.php");
?>
        
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="js/aliments.js" async></script>

        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">

    </head>
    <body>
        <h1 class="ms-3">Liste des aliments</h1>

        <table class="table table-striped" id="alimentTable">
            <thead>
                <tr>
                    <th scope="col" class="table-primary">Nom</th>
                    <th scope="col" class="table-primary">Catégorie</th>
                    <th scope="col" class="table-primary">Calories (kcal/100g)</th>
                    <th scope="col" class="table-primary">Eau (g/100g)</th>
                    <th scope="col" class="table-primary">Sucre (g/100g)</th>
                    <th scope="col" class="table-primary">Sel (g/100g)</th>
                    <th scope="col" class="table-primary">Opérations</th>
                </tr>
            </thead>
            <tbody id='alimentTableBody' >

            </tbody>
        </table>

        <h1 class="ms-3">Ajouter un aliment</h1>
        
        <form id="alimentForm">
            <div class="mb-3 ms-1 row">
                <label for="name" class="col-sm-2 col-form-label">Nom</label>
                <div class="col-sm-9">
                    <input type="text" id="inputName" name="name" class="form-control">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="type" class="col-sm-2 col-form-label">Catégorie</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" name="type" id="inputType">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="calories" class="col-sm-2 col-form-label">Calories (kcal/100g)</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" name="calories" id="inputCal">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="water" class="col-sm-2 col-form-label">Eau (g/100g)</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" name="water" id="inputWater">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="sugar" class="col-sm-2 col-form-label">Sucre (g/100g)</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" name="sugar" id="inputSugar">
                </div>
            </div>
            <div class="mb-3 ms-1 row">
                <label for="salt" class="col-sm-2 col-form-label">Sel (g/100g)</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" name="salt" id="inputSalt">
                </div>
            </div>
            <div class="row w-75 mx-auto">
                <input type="submit" value="Envoyer">
            </div>
        </form>

<?php
    require_once("footer.php");
?>