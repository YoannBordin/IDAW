<div class="footer">

<?php
  function setFooterLanguage($lang){
    echo "<p>";

    if($lang == 'fr'){
      echo "Site réalisé en HTML + CSS";
    }
    else{
      echo "Website written in HTML and CSS";
    }
    
    echo "</p></div></section></body></html>";
  }
?>