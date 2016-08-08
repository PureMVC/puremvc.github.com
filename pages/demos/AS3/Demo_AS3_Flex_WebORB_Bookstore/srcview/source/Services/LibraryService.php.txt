<?php

/* 
 PureMVC AS3 Demo - Flex/WebORB Bookstore
 By David Deraedt <david.deraedt@puremvc.org>
 Your reuse is governed by the Creative Commons Attribution 3.0 License
*/

require_once("Book.php");
require_once("Author.php");


class LibraryService
{
	

	
	public function LibraryService()
	{
		mysql_connect("localhost", "root", "root");
		mysql_select_db("formation") ;
		
	}
	
	
	function test(){
		 return "hello";	
	}


	/*
	
		BOOKS
		
	*/

	function mapBookRecordSet($recordset){
	
		$books=array();
		while($data=mysql_fetch_array($recordset)){
			$book = new Book();
			$book->mapObject($data);
			array_push($books, $book);
		}
		
		return $books ;
	
	}

    public function getBooks()
    {

		$rs = mysql_query("SELECT * FROM livre");	
  
		return $this->mapBookRecordSet($rs);
    }
    
    public function getBook($id)
    {
		$rs = mysql_query("SELECT * FROM livre WHERE idlivre = $id");
		$books = $this->mapBookRecordSet($rs);
		return $books[0];    
    }
    
    
    public function createBook($book)
    {
    	
    	$title = $book["title"];
    	$date = $book["date"];
    	$price = $book["price"];
    	$is_public = $book["is_public"];
    	$idauthor = $book["idauthor"];
    	
    	$result = mysql_query("INSERT INTO livre 
    	(titre, date, prix, is_public, idauteur)
    	VALUES
    	('$title', '$date', '$price', '$is_public', '$idauthor')
    	");	
    	
    	if(!$result)  throw new Exception( "Unable to create book" );
    	
    	return $this->getBook( mysql_insert_id() );
	
    }
    
    public function updateBook($book)
    {
    	
    	$id = $book["idbook"];    	
    	$title = $book["title"];
    	$date = $book["date"];
    	$price = $book["price"];
    	$is_public = $book["is_public"];
    	$idauthor = $book["idauthor"];
    	
    	$result = mysql_query(
    	"UPDATE livre SET 
    	titre = '$title',
    	date = '$date',
    	prix = '$price',
    	is_public = '$is_public',
    	idauteur = '$idauthor'    	
    	WHERE idlivre = $id");	
    	
    	if(!$result)  throw new Exception( "Unable to update book" );
    	
    	return $this->getBook($id);
    	
    }
    
    public function deleteBook($book)
    {
    	$id = $book["idbook"];
    	
    	$result =  mysql_query(
    	"DELETE FROM livre WHERE 
    	idlivre = $id");	
    	
    	if(!$result)  throw new Exception( "Unable to delete book" );
    	
    	return true ;
    	
    }
    
    
    /*
    
    	AUTHORS - not used in the demo so far...
    
    */


	function mapAuthorRecordSet($recordset){
	
		$authors=array();
		while($data=mysql_fetch_array($recordset)){
			$author = new Author();
			$author->mapObject($data);
			array_push($authors, $author);
		}
		
		return $authors ;
	
	}
    

    public function getAuthors()
    {
		$rs = mysql_query("SELECT * FROM auteur");	
		return $this->mapAuthorRecordSet($rs);
    	
    }
    public function getAuthor($id)
    {
		$rs = mysql_query("SELECT * FROM auteur WHERE idauteur = $id");
		$authors = $this->mapAuthorRecordSet($rs);
		return $authors[0];    
    }
    
    public function createAuthor($author)
    {
    	$firstname = $author["firstname"];
    	$lastname = $author["lastname"];
    	
    	$result = mysql_query("INSERT INTO auteur 
    	(prenom, nom)
    	VALUES
    	('$firstname', '$lastname')
    	");	
    	
    	if(!$result)  throw new Exception( "Unable to create author" );
    	
    	return $this->getAuthor( mysql_insert_id() );
    }
    
    public function updateAuthor($author)
    {
    	$id = $author["idauthor"];    	
    	$firstname = $author["firstname"];
    	$lastname = $author["lastname"];
    	
    	$result = mysql_query(
    	"UPDATE auteur SET 
    	prenom = '$firstname',
    	nom = '$lastname'
    	WHERE idauteur = $id");	
    	
    	if(!$result)  throw new Exception( "Unable to update author" );
    	
    	return $this->getAuthor($id);
    	
    }
    
    public function deleteAuthor($author)
    {
    	$id = $author["idauthor"];
    	
    	$result =  mysql_query(
    	"DELETE FROM auteur  
    	WHERE idauteur = $id");	
    	
    	if(!$result)  throw new Exception( "Unable to delete author" );

    	
    	return true ;
    }

    
}

?>
