

            <div class="menu">
                <div class="navigation">
                    <h2>Navigation</h2>
                </div>
                <nav class="menuelement">

            <?php
                function renderMenuToHTML($currentPageId){
                    echo "<ul>";

                    $menu = array(
                        'accueil' => array('Accueil'),
                        'cv' => array('CV'),
                        'hobbies' => array('Hobbies'),
                        'contact' => array('Contact')
                    );

                    foreach($menu as $pageId => $pageParams){
                        echo "<li><a ";

                        if($pageId == $currentPageId){
                            echo "id=\"current\" ";
                        }
                        
                        echo "href=\"index.php?page=", $pageId, "\">", $pageParams[0], "</a></li>";
                    }

                    echo "</ul></nav>";
                }
            ?>

            </div>