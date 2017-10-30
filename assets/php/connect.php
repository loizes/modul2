<?php   
 $db = mysql_connect("127.0.0.1","localand","1234");
 mysql_select_db("survey",$db);
 $sql = mysql_query("SELECT * FROM employees",$db);
 mysql_close($db);
 
 ?>