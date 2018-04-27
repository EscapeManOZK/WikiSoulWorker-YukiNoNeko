<?php
$bool = false;
// Paramètres de connexio
$user = 'id5461842_escapeman';
$password = 'Romozk17r-BD000';
// Chaîne de connexion (Windows)
$pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
$pdo = new PDO($pdodsn, $user, $password);
$requete = "SELECT * FROM `Admin` WHERE User LIKE '{$_POST['user']}%' AND Mdp LIKE '{$_POST['mdp']}%'  ";
foreach ($pdo->query($requete) as $row) {
    if($row!=null) {
        $bool = true;
        $expire=time()+60*60;
        setcookie("user",$row['User'],$expire);
        setcookie("role",$row['Role'],$expire);
    }
}
$pdo = null;
if($bool){
echo "<script type='text/javascript'>document.location.replace('index.php');</script>";
}else{
echo "<script type='text/javascript'>document.location.replace('Page_Connexion.php?error=1');</script>";
}

?>
