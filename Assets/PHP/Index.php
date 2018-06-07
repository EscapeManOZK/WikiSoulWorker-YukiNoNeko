<?php
// Paramètres de connexio
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
// Chaîne de connexion (Linux)
//$pdodsn = "dblib:version=7.0;charset=UTF-8;host=$host;dbname=$nomDb";
// Connexion PDO
$pdo = new PDO($pdodsn, $user, $password);

$requete = "Select * from Accueil_Article  ORDER BY `Accueil_Article`.`ID` DESC";
$rto="<h3 style='text-align: center;'><span class=\"textFR\">Fil d'actualité</span><span class=\"textEN NotLangue\" >News</span></h3>";
$rto.= "<div id='contentArticle'>";
foreach ($pdo->query($requete) as $row) {
    $textFR=explode("\n",$row['Description_FR']);
    $listOpen=false;
    foreach ($textFR as $FR){
        if (strstr($FR,"\\")==true)
            $FR=substr($FR, 0, strlen($FR)-3);
        $use=false;
        if($FR==="/r_"){
            if(!$listOpen){
                $textFRLast.="<ul>";
                $listOpen=true;
            }else{
                $textFRLast.="</ul>";
                $listOpen=false;
            }
            $use=true;
        }
        if(strstr($FR,"image_id:")){
            $code=explode("image_id:",$FR)[1];
            //Bannière et le .NoBanner
            if ($listOpen) {
                if($code=="3"||$code=="12") $textFRLast .= "<li class='imageArticle imageArticleLi imgNoSize{$code}'><img src='/Assets/PHP/image.php?code={$code}' /></li>";
                else $textFRLast .= "<li class='imageArticle imageArticleLi imgSize'><img src='/Assets/PHP/image.php?code={$code}' /></li>";
            }else {
                if($code=="3"||$code=="12") $textFRLast.="<p class='imageArticle imgNoSize{$code}'><img src='/Assets/PHP/image.php?code={$code}' /></p>";
                else $textFRLast.="<p class='imageArticle imgSize'><img src='/Assets/PHP/image.php?code={$code}' /></p>";
            }
            $use=true;
        }
        if(strstr($FR,'http')){
            $textFRLast.="<p class='ArticleContentLien'><a href='{$FR}'>{$FR}</a></p>";
            $use=true;
        }

        if(!$use) {
            if($listOpen) {
                $tmp = "";
                if (strstr($FR, "span:")) {
                    $tmp = explode("span:", $FR)[1];
                    $textFRLast .= "<li class='ArticleBlue'>";
                } else {
                    $tmp = $FR;
                    $textFRLast .= "<li>";
                }
                $textFRLast .= $tmp . "</li>";
            }else {
                $tmp = "";
                if (strstr($FR, "span:")) {
                    $tmp = explode("span:", $FR)[1];
                    $textFRLast .= "<p class='ArticleBlue'>";
                } else {
                    $textFRLast .= "<p>";
                    $tmp = $FR;
                }
                if ($tmp!==" ")
                $textFRLast .= $tmp . "</p>";
            }
        }
    }
    $textEN=explode("\n",$row['Description_EN']);
    $listOpen=false;
    $textENLast="";
    foreach ($textEN as $EN){
        if (strstr($EN,"\\")==true)
            $EN=substr($EN, 0, strlen($EN)-3);
        $use=false;
        if($EN==="/r_"){
            if(!$listOpen){
                $textENLast.="<ul>";
                $listOpen=true;
            }else{
                $textENLast.="</ul>";
                $listOpen=false;
            }
            $use=true;
        }
        if(strstr($EN,"image_id:")){
            $code=explode("image_id:",$EN)[1];
            if ($listOpen)$textENLast.="<li class='imageArticle imageArticleLi'><img src='/Assets/PHP/image.php?code={$code}' /></li>";
            else $textENLast.="<p class='imageArticle'><img src='/Assets/PHP/image.php?code={$code}' /></p>";
            $use=true;
        }
        if(strstr($EN,'http')){
            $textENLast.="<p class='ArticleContentLien'><a href='{$EN}'>{$EN}</a></p>";
            $use=true;
        }

        if(!$use) {
            if($listOpen) {
                $tmp = "";
                if (strstr($EN, "span:")) {
                    $tmp = explode("span:", $EN)[1];
                    $textENLast .= "<li class='ArticleBlue'>";
                } else {
                    $tmp = $EN;
                    $textENLast .= "<li>";
                }
                $textENLast .= $tmp . "</li>";
            }else {
                $tmp = "";
                if (strstr($EN, "span:")) {
                    $tmp = explode("span:", $EN)[1];
                    $textENLast .= "<p class='ArticleBlue'>";
                } else {
                    $textENLast .= "<p>";
                    $tmp = $EN;
                }
                if ($tmp!==" ")
                    $textENLast .= $tmp . "</p>";
            }
        }
    }
    $rto.="<article>";
    $rto.="<div class='ArticleTitle'><h4><span class=\"textFR\">".$row['Titre_FR']."</span><span class=\"textEN NotLangue\" >".$row['Titre_EN']."</span></h4></div>";
    $rto.="<div class='content'><span class=\"textFR\">".$textFRLast."</span><span class=\"textEN NotLangue\" >".$textENLast."</span></div>";
    $rto.="<div class='ArticleFooter row'><p class='col-md-6 col-xs-6'><a href='{$row['Lien']}' ><span class=\"textFR\">Le lien de l'article</span><span class=\"textEN NotLangue\" >The link of the article</span></a></p><p class='col-md-6 col-xs-6'><span class=\"textFR\">La date de Parution</span><span class=\"textEN NotLangue\" >The date of publication</span> : ".$row['Date']."</p></div>";
    $rto.="</article>";

// affichage des compositeur avec leur image et leur liste d'oeuvre
//$rto.= "<tr><td> <p>" . $row['User']. "  " . $row['Role'] . "</p></td></tr>";
}
$rto.= "</div>";
echo $rto;

$pdo = null;