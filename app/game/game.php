<?php
namespace game;
use PDO;

class game extends gameController
{
    public function saveGame()
    {
        
    }

    public function loadGame()
    {
        $sql = "SELECT * FROM player_data WHERE player_name = 'Pat' ";
        $query = $this->db->prepare($sql);
		$query->execute();
		return $query->fetchAll();
    }
}