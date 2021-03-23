<div class="footer">

<?php
  function setFooterLanguage($lang){
    echo "<p>";

    if($lang == 'fr'){
      echo "Site réalisé en HTML / CSS / PHP";
    }
    else{
      echo "Website written in HTML, CSS and PHP";
    }
    
    echo "</p></div></section></body></html>";
  }
?>