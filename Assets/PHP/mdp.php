<?php
/**
 * Created by PhpStorm.
 * User: Romain
 * Date: 14/06/2018
 * Time: 15:17
 */

define('PREFIX_SALT','WikiGameurse');
define('SUFFIX_SALT','Soulworker');
echo sha1(PREFIX_SALT.$_GET['mdp'].SUFFIX_SALT);