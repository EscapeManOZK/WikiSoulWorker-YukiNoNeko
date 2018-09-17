<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 13/06/2018
 * Time: 11:35
 */
session_start();
if (isset($_SESSION['ROLE'])&&$_SESSION['ROLE']!="")echo "true";
else echo "false";