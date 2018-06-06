<?php
$lang="FR";
if(isset($_GET['lang'])&&$_GET['lang']=="EN")
    $lang="EN";

// Paramètres de connexio
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
// Chaîne de connexion (Linux)
//$pdodsn = "dblib:version=7.0;charset=UTF-8;host=$host;dbname=$nomDb";
// Connexion PDO
$pdo = new PDO($pdodsn, $user, $password);

$requete = "Select Titre_".$lang.",Description_".$lang." from Accueil_Article ";
$rto= "<table>";
foreach ($pdo->query($requete) as $row) {
    // affichage des compositeur avec leur image et leur liste d'oeuvre
    $rto.= "<tr><td> <p>" . $row['User']. "  " . $row['Role'] . "</p></td></tr>";
}
$rto.= "</table>";
echo $rto;

$pdo = null;