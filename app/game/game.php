<?php
namespace game;
use PDO;

class game extends gameController
{
    public $playerData = [];

    public function setPlayerData($playerData)
    {
        $this->playerData = $playerData;
    }

    public function saveGame($playerData)
    {
        if($this->checkNewPlayer($playerData['player_name'])){
            $this->updateSaveGame($playerData);
            return "update save, code 4 ;-)";
        } else {
            $this->newSave($playerData);
            return "New save , code 4 ";           
        }            
    }

    public function newSave($playerData)
    {    
        $sql = "INSERT INTO player_data (session_id, player_name, wood_amount, coal_amount, sword_amount) 
                VALUES(
                    :session_id,
                    :player_name,
                    :wood_amount,
                    :coal_amount,
                    :sword_amount)";

        $query = $this->db->prepare($sql);	
        $query->bindParam(':session_id', "12145");
        $query->bindParam(':player_name', $playerData['player_name']);
        $query->bindParam(':wood_amount', $playerData['wood_amount']);
        $query->bindParam(':coal_amount', $playerData['coal_amount']);
        $query->bindParam(':sword_amount', $playerData['sword_amount']);
        
        $query->execute();
    }

    public function updateSaveGame($playerData)
    {
        $sql = "UPDATE player_data 
                SET wood_amount= :wood_amount, 
                    coal_amount = :coal_amount,
                    sword_amount = :sword_amount 
                WHERE player_name = :player_name";

        $query= $this->db->prepare($sql);
        $query->bindParam(':player_name', $playerData['player_name']);
        $query->bindParam(':wood_amount', $playerData['wood']);
        $query->bindParam(':coal_amount', $playerData['coal']);
        $query->bindParam(':sword_amount', $playerData['sword']);
        $query->execute();
        //return true; 
    }

    public function loadGame($playerName)
    {
        if($this->checkNewPlayer($playerName)){   
            $sql = "SELECT * FROM player_data WHERE player_name = :player_name ";
            $query = $this->db->prepare($sql);
		    $query->execute(array(':player_name'=>$playerName));
            return $query->fetchAll();
        }
        return "there is no such player with name ".$playerName;    
    }

    public function checkNewPlayer(string $playerName)
    {
	    $sql = "SELECT player_name FROM player_data WHERE player_name = :player_name";
		$query = $this->db->prepare($sql);
		$query->execute(array(':player_name'=>$playerName));
		if(($query->rowCount())==0){
			return false;
		}
		return true;
    }
} //end of class