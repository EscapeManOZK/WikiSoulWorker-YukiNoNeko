<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 13/06/2018
 * Time: 17:15
 */
session_start();
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
$pdo = new PDO($pdodsn, $user, $password);
$requete = "SELECT * FROM `Mail` WHERE ID LIKE '{$_GET['id']}'  ";
$response="";
foreach ($pdo->query($requete) as $row) {
    $response.="<p><span class='entete'>Mail de</span> {$row['Mail']}</p>";
    $response.="<p><span class='entete'>Objet du mail :</span> {$row['Titre']}</p>";
    $response.="<p class='entete'>Le corp du mail : </p><p>{$row['Corp']}</p>";
    if ($_SESSION['ROLE']=='1') $response.="<p><a id='{$row['ID']}' onclick='deleteHim()' href='#{$row['ID']}'>Supprimer</a></p>";
    $response.="<p><a id='close' href='#close' onclick='reload();'>Retour</a></p>";
}
echo $response;