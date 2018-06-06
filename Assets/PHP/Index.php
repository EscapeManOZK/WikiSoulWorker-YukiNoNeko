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
$rto= "<div id='contentArticle'>";
foreach ($pdo->query($requete) as $row) {
    $rto.="<article>";
    $rto.="<div class='ArticleTitle'><h4><span class=\"textFR\">".$row['Titre_FR']."</span><span class=\"textEN NotLangue\" >".$row['Titre_EN']."</span></h4></div>";
    $rto.="<div class='content'><p><span class=\"textFR\">".$row['Description_FR']."</span><span class=\"textEN NotLangue\" >".$row['Description_EN']."</span></p></div>";
    $rto.="<div class='ArticleFooter'><p>".$row['Lien']."</p><p>".$row['Date']."</p></div>";
    $rto.="</article>";

    // affichage des compositeur avec leur image et leur liste d'oeuvre
    //$rto.= "<tr><td> <p>" . $row['User']. "  " . $row['Role'] . "</p></td></tr>";
}
$rto.= "</div>";
echo $rto;

$pdo = null;