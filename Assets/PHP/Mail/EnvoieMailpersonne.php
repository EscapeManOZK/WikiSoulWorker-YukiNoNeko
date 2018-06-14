<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 11/06/2018
 * Time: 10:09
 */
$mail = $_POST['mail'];
$lang = $_POST['lang'];
$img = $_POST['img'];
if ($mail==""||$lang==""||$img==""){
    echo "error";
}else {
    $corp = '';
    $texteLang='';
    if ($_GET['img']=="true"){
        if ($lang=="FR"){
            $texteLang .="\n \nCe message agis comme un contrat donc de ce fais si vous ne possédais pas les droit sur les images vous en serrez responsable";
        }else{
            $texteLang .="\n \nThis message acts as a contract so if you did not own the rights to the images you will be responsible";
        }
    }
    $titre='';
    if ($lang=="FR"){
        $corp="Votre réponse as bien été enregistée.\n Celle ci sera traitée dans les plus bref délais par l'équipe de modération du site.\n Vous pourrai être contacté par la suite si nous avons besion d'explication.".$texteLang."\n\n Merci de votre participation pour l'amélioration du Wiki.\n\n L'équipe de modération";
        $titre="Comfirmation de la reception de votre message";
    }else{
        $corp="Your answer has been saved.\n This will be treated as soon as possible by the moderation team of the website.\n You can be contacted later if we need explanation.".$texteLang."\n\n Thank you for your participation in improving the Wiki.\n\n The moderation team";
        $titre="Comfirmation of the receipt of your message";
    }

    ini_set("SMTP","smtp.fournisseur.fr");
    ini_set("smtp_port","25");
    $destinataire = $mail;
    $objet        = utf8_decode($titre);
    $message      = $corp;
    $entetes  = "Content-Type: text/plain; charset=UTF-8\r\n";
    $entetes .= "From: soulworkerwiki@bot.fr\r\n";
    $bOk = mail($destinataire, $objet, $message, $entetes);
    echo $bOk;
}