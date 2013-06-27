<?php
ini_set('default_charset', 'UTF-8');
// Init Smarty
require_once '../../smarty/libs/Smarty.class.php';

$smarty = new Smarty();

$smarty->template_dir = '../smartytan/templates';
$smarty->compile_dir = '../smartytan/templates_c';
$smarty->cache_dir = '../smartytan/cache';
$smarty->config_dir = '../smartytan/configs';  
// Init Smarty end
?>
