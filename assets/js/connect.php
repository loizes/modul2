<?php   
 $db = mysql_connect("127.0.0.1","localand","1234")
  or die('Could not connext to mysql server');
 mysql_select_db("survey",$db) 
 or die('Could not select db');
 $sql = mysql_query("SELECT name FROM employees",$db);
 mysql_close($db);
 
 ?>