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
<script type="text/javascript">
    function anim(){
            if ($("#text5").css("display")!="none"){
                $("#text4").slideUp();
            }else if ($("#text4")!=null && $("#text2").css("display")!="none"){
                $("#text3").slideUp();
            }else if ($("#text3")!=null && $("#text2").css("display")!="none"){
                $("#text2").slideUp();
            }else if ($("#text2")!=null && $("#text2").css("display")!="none"){
                $("#text1").slideUp();
            }
    }
</script>

<body>

<div id="wrapper" class="toggled">

    <!-- Sidebar -->
    <div id="sidebar-wrapper" >
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a class="Accueil" href="/"><img src="../Assets/images/LogoSL.png" id="LogoSL"></a>
                </li>
                <li>
                    <a class="Accueil" href="/">
                        <span class="textFR">Accueil</span>
                        <span class="textEN NotLangue" >Home</span>
                    </a>
                </li>
                <li id = "Perso">
                    <a href="#">
                        <span class="textFR">Personnages</span>
                        <span class="textEN NotLangue" >Characters</span>
                    </a>
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
                            <li>
                                <a  id="Jin" href="Personnage/Jin.html">Jin Seipatsu</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="Combat">
                    <a href="#AllCombat">
                        <span class="textFR">Combats</span>
                        <span class="textEN NotLangue" >Fights</span>
                    </a>
                    <div id="AllCombat">
                        <ul>
                            <li>
                                <a id="Combats" href="">
                                    <span class="textFR">Combats</span>
                                    <span class="textEN NotLangue" >Fights</span>
                                </a>
                            </li>
                            <li>
                                <a id="Exp" href="">
                                    <span class="textFR">Expérience</span>
                                    <span class="textEN NotLangue" >Expertise</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a id="Objets" href="">
                        <span class="textFR">Objets</span>
                        <span class="textEN NotLangue" >Objects</span>
                    </a>
                </li>
                <li>
                    <a id="Contact" href=""><span class="textFR">Contact</span>
                        <span class="textEN NotLangue" >Contact us</span></a>
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
            <p ><span class="textFR">Envoie du mail</span><span class="textEN NotLangue">Send Email</span></p>
        </div>
    </div>
<?php
$mail = $_GET['mail'];
$titre = $_GET['titre'];
$corp = $_GET['corp'];
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

  $pdo = null;
$lang = $_GET['lang'];
$list = $_GET['List'];
if ($_GET['img']=="true"){
if ($lang=="FR"){
$corp .="\n \nCe message agis comme un contrat donc de ce fais si vous ne possédais pas les droit sur les images vous en serrez responsable";
}else{
$corp .="\n \nThis message acts as a contract so if you did not own the rights to the images you will be responsible";
}
}

ini_set("SMTP","smtp.fournisseur.fr");
ini_set("smtp_port","25");
$destinataire = "mail@soulworker-wiki.com";
$objet        = utf8_decode($titre);
$message      = $corp;
$entetes  = "Content-Type: text/plain; charset=UTF-8\r\n";
$entetes .= "Cc: ".$mail."\r\n";
$entetes .= "From: soulworkerwiki@bot.fr\r\n";
$bOk = mail($destinataire, $objet, $message, $entetes);
$url="index.html?lang=".$lang."&List=".$list."&return=".$bOk;
//if($bOk) echo "Mail 1 envoy&eacute; avec succ&egrave;s";
//else echo "Erreur d'envoi du Mail 1";
echo "<script type='text/javascript'>document.location.replace('".$url."');</script>";
?>
    <!-- /#page-content-wrapper -->

</div>

</body>

</html>
