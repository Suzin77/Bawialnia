<?php
use game\game as game;
use game\gameConfig as gameConfig;
use controller\controller as controller;
use controller\filtr as filtr;
use models\real\sessionMenago as sessionMenago;
use models\virtual\virtualPost as virtualPost;
use helpers\cookieHelper as cookieHelper;
include_once('../../vendor/autoload.php');
include_once('../../app/config/config.php');

// $game = new game();
// $gameData = $game->loadGame();
// $jsonResponse = json_encode($gameData);
$jsonResponse = json_encode($_POST);
header('Content-Type: application/json');
echo $jsonResponse;

//$gameConfig = new gameConfig();
//var_dump($json);