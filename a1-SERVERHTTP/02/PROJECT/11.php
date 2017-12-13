<?php
	// 使用面向对象风格连接MySQL
	/*
	 * 1. 创建mysqli或mysql对象
	 *  $mysqli = new mysqli(host,username,passwd,dbname,port);
	 *  * 相当于与MySQL数据库建立连接
	 */
	$mysqli = new mysqli('127.0.0.1','root','','day1117','3306');

	// var_dump($mysqli);

	/*
	 * 2. 定义SQL语句
	 *  默认情况下的编码格式为ISO8859-1
	 *  * 如何解决中文乱码问题
	 *    mysqli_query("SET NAMES UTF8");
	 */
	$sql = "INSERT INTO myuser VALUES(NULL,'金毛狮王','12345',55,'jinmao@qq.com','光明顶')";

	$mysqli->query("SET NAMES UTF8");

	/*
	 * 3. 调用mysqli对象的query()方法
	 *  $mysqli->query($sql)
	 *  * 该方法返回执行结果
	 */
	$result = $mysqli->query($sql);

	// var_dump($result);

	/*
	 * 4. 如果执行SELECT语句
	 *  * 返回mysqli_result对象
	 */
	
	/*
	 * 5. 调用$mysqli对象的close()方法
	 */
	$mysqli->close();
?>