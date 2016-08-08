<?php
/* 
 PureMVC AS3 Demo - Flex/WebORB Bookstore
 By David Deraedt <david.deraedt@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/
class Book
{
	var $idbook;	
	var $idauthor;
    var $title;
    var $price;
    var $date;
    var $is_public;
    
    function mapObject($data){
		$this->idbook = $data["idlivre"];	
		$this->idauthor = $data["idauteur"];
		$this->title = $data["titre"];
		$this->price = $data["prix"];
		$this->date = $data["date"];		
		$this->is_public = (bool) $data["is_public"];		

	}
}
?>