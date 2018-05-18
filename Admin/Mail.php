<!DOCTYPE html>
<html lang="fr">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Rowczarek">
    <link rel="icon" type="image/png" href="../Assets/images/logo.png" />

    <title>Soulworker Wiki - Admin</title>

    <!-- Bootstrap core CSS -->
    <link href="../Assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../Assets/CSS/simple-sidebar.css" rel="stylesheet">
    <link href="../Assets/CSS/Langue.css" rel="stylesheet">
    <link href="../Assets/CSS/index.css" rel="stylesheet">
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
            <li id="Objet">
                            <a href="#AllObjets">
                                <span class="textFR">Objets</span>
                                <span class="textEN NotLangue" >Objects</span>
                            </a>
                            <div id="AllObjets">
                                <ul>
                                    <li>
                                        <a id="Akasha" href="">
                                            <span class="textFR">Akasha</span>
                                            <span class="textEN NotLangue" >Akasha</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="Plan" href="">
                                            <span class="textFR">Plan</span>
                                            <span class="textEN NotLangue" >Blueprint</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a id="Ressource" href="">
                                            <span class="textFR">Ressources</span>
                                            <span class="textEN NotLangue" >Resources</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
            <?php
            $user = 'id5461842_escapeman';
            $password = 'Romozk17r-BD000';
            // Chaîne de connexion (Windows)
            $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
            $pdo = new PDO($pdodsn, $user, $password);
            $requete = "SELECT * FROM `Mail` WHERE ID LIKE '{$_GET['id']}%'  ";
            foreach ($pdo->query($requete) as $row) {
                echo "<p>Le mail : </p><p>{$row['Mail']}</p>";
                echo "<p>Le titre : </p><p>{$row['Titre']}</p>";
                echo "<p>Le corp : </p><p>{$row['Corp']}</p>";
                if ($_COOKIE['role']=='1') echo "<p><a href='Delete.php?id={$row['ID']}'>Supprimer le mail</a></p>";
            }
            ?>
            <p><button onclick="document.location.replace('index.php');">Retour</button></p>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

</div>

</body>

</html>
