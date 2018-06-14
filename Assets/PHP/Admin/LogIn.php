<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 13/06/2018
 * Time: 11:20
 */

class LogIn
{
    private $m_ID;
    private $m_Mdp;
    private $_IsCorrect;

    public function __construct($id,$mdp)
    {
        $this->m_ID=$id;
        $this->m_Mdp=$mdp;
        $this->_IsCorrect=false;
    }

    public function logIn(){
        // Paramètres de connexio
        $user = 'id5461842_escapeman';
        $password = 'Romozk17r-BD000';
        // Chaîne de connexion (Windows)
        $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
        $pdo = new PDO($pdodsn, $user, $password);
        $requete = "SELECT * FROM `Admin` WHERE User LIKE '{$this->m_ID}' AND Mdp LIKE '{$this->m_Mdp}'  ";
        $i=0;
        $id="";
        foreach ($pdo->query($requete) as $row) {
            $i++;
            if($i==1)
            $id=$row['Role'];
        }
        if($i==1){
            $this->_IsCorrect=true;
            session_start();
            $_SESSION['ROLE']=$id;
        }
        $pdo = null;
    }
    /**
     * @return bool
     */
    public function isCorrect()
    {
        return $this->_IsCorrect;
    }

    public function CheckID(){
        $bool=false;
        // Paramètres de connexio
        $user = 'id5461842_escapeman';
        $password = 'Romozk17r-BD000';
        // Chaîne de connexion (Windows)
        $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
        $pdo = new PDO($pdodsn, $user, $password);
        $requete = "SELECT * FROM `Admin` WHERE Mdp LIKE '{$this->m_Mdp}'";
        foreach ($pdo->query($requete) as $row) {
            if($row!=null) {
                $bool=true;
            }
        }
        $pdo = null;
        return $bool;
    }

    public function CheckMDP(){
        $bool=false;
        // Paramètres de connexio
        $user = 'id5461842_escapeman';
        $password = 'Romozk17r-BD000';
        // Chaîne de connexion (Windows)
        $pdodsn = "mysql:host=localhost;dbname=id5461842_mail";
        $pdo = new PDO($pdodsn, $user, $password);
        $requete = "SELECT * FROM `Admin` WHERE User LIKE '{$this->m_ID}'";
        foreach ($pdo->query($requete) as $row) {
            if($row!=null) {
                $bool=true;
            }
        }
        $pdo = null;
        return $bool;
    }
}