<?php
	// 1. 接收客户端的请求数据
	$value = $_POST['value'];
	//var_dump($value);
	// 2. 进行响应
	echo '{"chat":"'.$value.'"}';
?>