<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Rowczarek">
    <link rel="icon" type="image/png" href="../Assets/images/logo.png" />

    <title>Soulworker Wiki - Contact</title>

    <!-- Bootstrap core CSS -->
    <link href="../Assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../Assets/CSS/simple-sidebar.css" rel="stylesheet">
    <link href="../Assets/CSS/Langue.css" rel="stylesheet">
    <link href="../Assets/CSS/Contact.css" rel="stylesheet">
    <script type="text/javascript" src="../Assets/JS/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="../Assets/JS/Menu_deroulant.js"></script>
    <script type="text/javascript" src="../Assets/JS/Main.js"></script>
</head>

<body>

<div id="wrapper" class="toggled">

    <!-- Sidebar -->
    <div id="sidebar-wrapper" >
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a class="Accueil" href="/"><img src="../Assets/images/LogoSL.png" id="LogoSL"></a>
            </li>
            <li>
                <a class="Accueil" href="/">Accueil</a>
            </li>
            <li id = "Perso">
                <a href="#">Personnages</a>
                <div id="AllPerso">
                    <ul>
                        <li >
                            <a id="Haru" href="Personnage/Haru.html">Haru Estia</a>
                        </li>
                        <li>
                            <a id="Erwin" href="Personnage/Erwin.html">Erwin Archlight</a>
                        </li>
                        <li>
                            <a id="Lily" href="Personnage/Lily.html">Lily Bloomerchen</a>
                        </li>
                        <li>
                            <a  id="Stella" href="Personnage/Stella.html">Stella Unibell</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a id="Combats" href="">Combats</a>
            </li>
            <li>
                <a id="Objets" href="">Objets</a>
            </li>
            <li>
                <a id="Contact" href="">Contact</a>
            </li>
            <li id="form">
                <form >
                    <div class="select-wrapper">
                        <select id="Langue" style>
                            <option value="FR" id="FR" >FR</option>
                            <option value="EN" id="EN" >EN</option>
                        </select>
                    </div>
                </form>
            </li>
        </ul>

    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
            <!--
            <span class="textFR"></span>
            <span class="textEN NotLangue" ></span>
            -->
            <p id="imgcharg"><img src="../Assets/images/sendmail2.gif" id="sendMail"/></p>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

</div>
<?php
ini_set("SMTP","smtp.fournisseur.fr");
ini_set("smtp_port","25");
$destinataire = "mail@soulworker-wiki.com";
$objet        = utf8_decode("Envoi de texte brut à partir de PHP");
$message      = "ça réussit !!!";
$entetes  = "Content-Type: text/plain; charset=UTF-8\r\n";
$entetes .= "Cc: copie@laposte.net\r\n";
$entetes .= "From: emetteur@free.fr\r\n";
$bOk = mail($destinataire, $objet, $message, $entetes);
if($bOk) echo "Mail 1 envoy&eacute; avec succ&egrave;s";
else echo "Erreur d'envoi du Mail 1";
?>

</body>

</html>
