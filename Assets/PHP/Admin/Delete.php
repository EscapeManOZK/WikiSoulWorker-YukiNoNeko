<?php
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
$pdo = new PDO($pdodsn, $user, $password);
$req = "DELETE FROM Mail WHERE `ID` = {$_GET['id']}";
$pdo->query($req);
$pdo = null;
?>

