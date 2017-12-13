<?php
	$user = $_POST['user'];
	$pwd = $_POST['pwd'];

	if($user=='admin'&&$pwd=='admin'){
		echo 'login successful.';
	}else{
		echo 'login error.';
	}
?>