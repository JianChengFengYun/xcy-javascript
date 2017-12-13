<?php
	// 1. 接收客户端的请求数据
	$name = $_POST['name'];
	$pwd = $_POST['pwd'];
	var_dump($name);
	// 2. 向客户端进行响应
	//echo 'load success.';
	echo '{"name":"zhouzhiruo","pwd":"123"}';
?>