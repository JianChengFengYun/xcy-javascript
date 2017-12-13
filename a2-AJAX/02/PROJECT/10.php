<?php
	// 接收客户端发送的请求数据
	$user = $_POST['user'];
	// 就是一个JSON格式的string字符串
	//var_dump($user);
	
	$json_user = json_decode($user,true);

	//var_dump($json_user['name']);

	$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
	//var_dump(json_decode($json));
	
	// 响应数据符合JSON格式的字符串
	// 1. 手工方式构建
	//echo '{"name":"zhouzhiruo","pwd":"123456"}';

	// 2. 使用json_encode()函数
	echo json_encode($json_user);
?>