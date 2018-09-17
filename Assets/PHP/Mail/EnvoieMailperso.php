<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 11/06/2018
 * Time: 10:10
 */
$mail = $_POST['mail'];
$titre = $_POST['titre'];
$corp = $_POST['corp'];
if ($mail==""||$titre==""||$corp==""){
    echo "error";
}else {

        $respons= "Message de ".$mail."\n\n Contenu : \n".$corp;
        ini_set("SMTP","smtp.fournisseur.fr");
        ini_set("smtp_port","25");
        $destinataire = "mail@soulworker-wiki.com";
        $objet        = utf8_decode($titre);
        $message      = $respons;
        $entetes  = "Content-Type: text/plain; charset=UTF-8\r\n";
        $entetes .= "From: soulworkerwiki@bot.fr\r\n";
        $bOk = mail($destinataire, $objet, $message, $entetes);
        echo "success";
}