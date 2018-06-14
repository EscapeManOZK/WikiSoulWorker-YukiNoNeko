<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 13/06/2018
 * Time: 11:47
 */
include 'LogIn.php';
$id=$_POST['ID'];
$mdp=$_POST['mdp'];
$login = new LogIn($id,$mdp);
$login->logIn();
if($login->isCorrect()){
    echo "success";
}else{
    $Cid=$login->CheckID();
    $Cmdp=$login->CheckMDP();
    if($Cid&&$Cmdp){
        echo "error1";
    }else if(!$Cid&&!$Cmdp){
        echo "error2";
    }else if($Cid){
        echo "error3";
    }else if($Cmdp){
        echo "error4";
    }
}