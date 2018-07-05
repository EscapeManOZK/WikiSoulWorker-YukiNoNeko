<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 13/06/2018
 * Time: 14:17
 */
session_start();
$response="<table class=\"table-fill\"><thead><tr><th class=\"text-center\">L'expéditeur</th><th class=\"text-center\">L'objet</th><th class=\"text-center\">Détail</th>";
if ($_SESSION['ROLE']==1){
    $response.="<th class=\"text-center\">Supprimer le mail</th>";
}
$response.="</tr></thead><tbody class=\"table-hover\">";
$inser = false;
// Paramètres de connexio
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
$pdo = new PDO($pdodsn, $user, $password);
$requete = "SELECT * FROM `Mail` ";
foreach ($pdo->query($requete) as $row) {
    if($row!=null) {
        $inser=true;
        $response.="<tr><td class=\"text-left\">{$row['Mail']}</td><td class=\"text-left\">{$row['Titre']}</td><td class=\"text-left\"><a id='r{$row['ID']}' onclick='infos({$row['ID']})' href='#r{$row['ID']}'>Le mail</a> </td>";
        if ($_SESSION['ROLE']=='1'){
            $response.="<td class=\"text-left\"><a class='delete' id='{$row['ID']}' onclick='deleteHim({$row['ID']})' href='#{$row['ID']}'>Supprimer</a></td>";
        }
        $response.="</tr>";
    }
}
if (!$inser){
    if ($_SESSION['ROLE']=='1') {
        $response.="<tr><td colspan='4' style='text-align: center;'>Pas de mail</td></tr>";
    }else{
        $response.="<tr><td colspan='3' style='text-align: center;'>Pas de mail</td></tr>";
    }
}
$response.="</tbody></table>";
$pdo = null;
echo $response;