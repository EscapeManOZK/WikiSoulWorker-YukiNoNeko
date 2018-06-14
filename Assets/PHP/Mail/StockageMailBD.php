<?php
$mail = $_POST['mail'];
$titre = $_POST['titre'];
$corp = $_POST['corp'];
if ($mail==""||$titre==""||$corp==""){
    echo "error";
}else {
        // Paramètres de connexio
        $user = 'id5461842_escapeman';
        $password = 'Romozk17r-BD000';
        // Chaîne de connexion (Windows)
        $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
        // Chaîne de connexion (Linux)
        //$pdodsn = "dblib:version=7.0;charset=UTF-8;host=$host;dbname=$nomDb";
        // Connexion PDO
        $pdo = new PDO($pdodsn, $user, $password);

        $req = "INSERT INTO Mail (Mail, Titre, Corp) VALUES('{$mail}','{$titre}','{$corp}')";
        $pdo->query($req);

    echo "success";
    $pdo = null;
}

