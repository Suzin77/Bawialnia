<?php
namespace models\real;

class sessionMenago {

    public $name = null;
    
    public function __constructor(){
        
        //setcookie('pierwszename','drugie ddd',30000,'/');
        echo "dddsds";
    }

    public function setName(string $name){
        $this->name = $name;
    }

    public function getName(){
        if($this->name){
            return $this->name;
        } else {
            echo "Use setName first";
        }    
    }
}