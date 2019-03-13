<?php
use game\game as game;
use game\gameConfig as gameConfig;
use controller\controller as controller;
use controller\filtr as filtr;
//use controller\controller\PDO as PDO;
use models\real\sessionMenago as sessionMenago;
use models\virtual\virtualPost as virtualPost;
use helpers\cookieHelper as cookieHelper;
include_once(__DIR__ . '/vendor/autoload.php');
include_once(__DIR__.'/app/config/config.php');

//$secondOne = new virtualPost();
//$ciacho = new sessionMenago();
//$ciacho->setName('Pat');
//$ciacho->getName();
//var_dump($ciacho);
//$controller = new controller();
//var_dump($controller);
//$filtr = new filtr();
//$filtr->saveData();
$game = new game();

$gameData = $game->loadGame();
$json = json_encode($gameData);
//$gameConfig = new gameConfig();
var_dump($json);
//new PDO();
//$options = array(PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING);
//$db = new PDO(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS, $options);
//var_dump($db);
//$test = new mysqli();
//$ciastko = new cookieHelper();
//var_dump($ciastko);
//$ciastko->getCookie();
//$ciastko->createCookie();
//$ciastko->getCookie();