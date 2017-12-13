<?php
	// 用于处理用户登录的逻辑
	/*
	 * 1. 接收客户端请求的用户名和密码
	 *  * 使用$_GET还是使用$_POST接收客户端请求的数据
	 *    * 取决于客户端HTML页面中的表单<form>的method属性值
	 *  * $_POST[元素name属性值]
	 */
	$username = $_POST['username'];
	$password = $_POST['password'];

	//echo "$username : $password";

	// 2. MySQL数据库(myuser表),查询
	$conn = mysqli_connect('127.0.0.1','root','','day1117','3306');
	$sql = "SELECT * FROM myuser WHERE name='$username' AND pwd='$password'";

	//var_dump($sql);

	/*
	 * 3. 查询结果 - 空|一条记录
	 *  mysqli_result结果集对象
	 *  * SQL语句执行成功 - 返回该对象
	 *  * SQL语句执行失败 - 返回false
	 */
	$result = mysqli_query($conn,$sql);

	//var_dump($result);

	// 4. 根据查询结果,向客户端不同的答案
	if($result->num_rows != 0){
		// 正确
		echo '恭喜你,登录啦...';
	}else{
		// 错误
		echo '对不起,请再次登录...';
	}

?>