<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 08/06/2018
 * Time: 09:24
 */

include ('ImageClass.php');
class GestionImage
{
    private $ImageArray = array();
    public function __construct(){
        $user = 'id5461842_escapeman';
        $password = 'Romozk17r-BD000';
        // Chaîne de connexion (Windows)
        $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
        // Chaîne de connexion (Linux)
        //$pdodsn = "dblib:version=7.0;charset=UTF-8;host=$host;dbname=$nomDb";
        // Connexion PDO
        $pdo = new PDO($pdodsn, $user, $password);
        $requete = "Select * from Image";
        $i=0;
        foreach ($pdo->query($requete) as $row) {
            $tmpImage = new ImageClass($row['ID'],$row['Titre_FR'],$row['Titre_EN'],$row['Banner'],$row['largeur']);
            $this->ImageArray[$i]=$tmpImage;
            $i++;
        }
    }

    /**
     * @return ImageClass
     */
    public function getImage($id)
    {
        return $this->ImageArray[$id];
    }

    /**
     * @return int
     */
    public function getImageArrayLenght()
    {
        return count($this->ImageArray);
    }
}