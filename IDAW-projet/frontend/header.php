<!DOCTYPE html>
<html lang='fr'>
    <head>
        <meta charset='utf-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

<?php
function setTitle($title){
    echo "<title>$title</title>";
}

function setPage($file){
    require_once("config.php");

    echo "<div class=\"container\">";
        echo "<header class=\"d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom\">";
            echo "<a class=\"d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none\">";
                echo "<svg class=\"bi me-2\" width=\"40\" height=\"32\"></svg>";
                echo "<span class=\"fs-4\">iMangerMieux</span>";
                echo "<span class=\"ps-4 fs-6\">Votre référence santé et nutrition</span>";
            echo "</a>";
            echo "<ul class=\"nav nav-pills\">";
                foreach ($pages as $key => $value) {
                    echo "<li class=\"nav-item\"><a href=\"$key\" class=\"nav-link";
                    if($file == $key){
                        echo " active";
                    }
                    echo "\">$value</a></li>";
                }
            echo "</ul>";
    echo "</div>";
}
?>