<?php
	// 接收客户端发送的请求数据
	$user = $_POST['user'];//符合XML格式要求的string类型
	//var_dump($user);
	// 创建DOMDocument对象
	$doc = new DOMDocument();
	// 调用loadXML()方法
	$result = $doc->loadXML($user);
	//var_dump($doc);
	
	// 如何构建符合XML格式的数据
	/* 修改响应头的Content-Type值为"text/xml"
	header('Content-Type:text/xml');
	echo $user;// 符合XML格式的string类型
	*/
	
	header('Content-Type:application/xml');
	echo $doc->saveXML();
?>