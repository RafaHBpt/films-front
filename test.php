<?php
	echo "PHP funciona<br/><br/>";
	
	$servername = "localhost";
	$username = "root";
	$password = "TheSliver_12";
	
	// Crear conexión
	$conn = mysqli_connect($servername, $username, $password);
	
	// Corroborar conexión
	if (!$conn) {
	    die("Conexión fallida: " . mysqli_connect_error());
	}
	echo "Conectado a MySQL correctamente";

?> 
