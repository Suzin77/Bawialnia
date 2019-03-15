<?php
namespace controller;

use models\real\sessionMenago as sessionMenago;

class filtr extends controller
{
    
    public function getData()
    {
        echo "veto";
        $zzz =new sessionMenago();
        $zzz->getName();
    }

    public function saveData()
    {
        $id = rand(1,200);
        $wood = rand(1,100);
        $coal = rand(1,100);
        $sword = rand(1,100);
        $sql = "INSERT INTO player_data (session_id, player_name, wood_amount, coal_amount, sword_amount) VALUES($id,'testname',$wood,$coal,$sword )";
        $query =  $this->db->prepare($sql);
        $query->execute();
    }
}