<?php
use game\game as game;
use game\gameConfig as gameConfig;
use controller\controller as controller;
use controller\filtr as filtr;
//use controller\controller\PDO as PDO;
use models\real\sessionMenago as sessionMenago;
use models\virtual\virtualPost as virtualPost;
use helpers\cookieHelper as cookieHelper;
include_once('../../vendor/autoload.php');
include_once('../../app/config/config.php');

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
$jsonResponse = json_encode($gameData);
header('Content-Type: application/json');
echo $jsonResponse;
//$gameConfig = new gameConfig();
//var_dump($json);