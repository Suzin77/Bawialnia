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

if(isset($_POST['player_name'])){
    $game = new game();
    $gameData = $game->loadGame($_POST['player_name']);//need to be validate. add sanitation 
    $jsonResponse = json_encode($gameData);
    header('Content-Type: application/json');
    echo $jsonResponse;
}