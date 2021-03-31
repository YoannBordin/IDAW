<?php
    require_once('header.php');
    setTitle('Aliments');
?>
        
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js" crossorigin="anonymous"></script>
        <script src="js/aliments.js" async></script>

        <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css">

    </head>
    <body>
        <table class="table" id="alimentTable">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Catégorie</th>
                    <th scope="col">Calories (kcal/100g)</th>
                    <th scope="col">Eau (g/100g)</th>
                    <th scope="col">Sucre (g/100g)</th>
                    <th scope="col">Sel (g/100g)</th>
                    <th scope="col">Opérations</th>
                </tr>
            </thead>
            <tbody id='alimentTableBody' >

            </tbody>
        </table>

        <h1>Ajouter un aliment</h1>
        
        <form id="alimentForm">
            <div class="form-group row">
                <label for="name">Nom</label>
                <input type="text" class="form-control" name="name" id="inputName">
            </div>
            <div class="form-group row">
                <label for="type">Catégorie</label>
                <input type="text" class="form-control" name="type" id="inputType">
            </div>
            <div class="form-group row">
                <label for="calories">Calories (kcal/100g)</label>
                <input type="text" class="form-control" name="calories" id="inputCal">
            </div>
            <div class="form-group row">
                <label for="water">Eau (g/100g)</label>
                <input type="text" class="form-control" name="water" id="inputWater">
            </div>
            <div class="form-group row">
                <label for="sugar">Sucre (g/100g)</label>
                <input type="text" class="form-control" name="sugar" id="inputSugar">
            </div>
            <div class="form-group row">
                <label for="salt">Sel (g/100g)</label>
                <input type="text" class="form-control" name="salt" id="inputSalt">
            </div>
            <div class="form-group row">
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </body>
</html>