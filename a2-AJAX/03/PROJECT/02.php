<?php
	// 1. 接收客户端请求的数据
	$name = $_GET['name'];
	$pwd = $_GET['pwd'];
	//var_dump($name);
	// 2. 向客户端进行响应
	
	// a. 响应格式为HTML格式
	//echo 'get success.';
	
	// b. 响应格式为XML格式
	//header("Content-Type:text/xml");
	//echo '<user><name>zhouzhiruo</name><pwd>123</pwd></user>';

	// c. 响应格式为JSON格式
	echo '{"name":"zhouzhiruo","pwd":"123"}';
?>