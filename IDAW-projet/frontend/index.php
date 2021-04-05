<?php
    require_once('header.php');
    setTitle('Accueil');
    setPage("index.php");
?>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" crossorigin="anonymous"></script>
        <script src="https://d3js.org/d3.v6.min.js"></script>
        <script src="js/index.js" async></script>
    </head>

    <body>
        <!-- Add a svg area, empty -->
        <div id="Area"></div>
        
<?php
    require_once("footer.php");
?>