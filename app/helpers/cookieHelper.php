<?php
namespace helpers;

class cookieHelper
{
    public function __construct(){
        $this->id = 'some_id';
        //$this->openDatabaseConnection();
    }

    public function createCookie(){
        setcookie($this->id, 'some_name', time() + (86400 * 30), "/");
    }

    public function getCookie(){
        if(isset($_COOKIE[$this->id])){
            var_dump($_COOKIE[$this->id]);
        } else {
            echo "Nie ma ciasta na ciastka";
        }    
    }
}