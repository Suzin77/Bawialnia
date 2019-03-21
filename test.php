<?php
use game\game as game;
use game\gameConfig as gameConfig;
use controller\controller as controller;
use controller\filtr as filtr;
use models\real\sessionMenago as sessionMenago;
use models\virtual\virtualPost as virtualPost;
use helpers\cookieHelper as cookieHelper;
include_once(__DIR__ . '/vendor/autoload.php');
include_once(__DIR__.'/app/config/config.php');

$game = new game();

$gameData = $game->loadGame();
$json = json_encode($gameData);
var_dump($json);