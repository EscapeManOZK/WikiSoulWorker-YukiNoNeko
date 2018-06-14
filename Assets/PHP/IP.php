<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 12/06/2018
 * Time: 09:46
 */
if ($_SERVER['REMOTE_ADDR']!="193.248.60.235"){
    echo "<p><span class=\"textFR\">Page en cours de maintenance</span><span class=\"textEN NotLangue\" >Page under maintenance</span></p>";
}else{
    echo "";
}