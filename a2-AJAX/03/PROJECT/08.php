<?php
	// 1. 接收客户端请求的数据内容(用户名和密码)
	$username = $_POST['username'];
	$password = $_POST['password'];
	// 2. 判断登录是否成功
	if($username=='admin'&&$password=='admin'){
		echo 'login success.';
	}else{
		echo 'login error.';
	}
?>