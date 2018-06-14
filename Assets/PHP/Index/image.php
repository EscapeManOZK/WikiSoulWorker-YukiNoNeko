<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 07/06/2018
 * Time: 10:18
 */
$code = $_GET['code'];
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
// Chaîne de connexion (Linux)
//$pdodsn = "dblib:version=7.0;charset=UTF-8;host=$host;dbname=$nomDb";
// Connexion PDO
$pdo = new PDO($pdodsn, $user, $password);
$stmt = $pdo->prepare("SELECT Image FROM Image WHERE ID=?");
$stmt->execute(array($_GET['code']));
$image = $stmt->fetch()['Image'];
header("Content-Type: image/jpeg");
echo $image;
$pdo = null;