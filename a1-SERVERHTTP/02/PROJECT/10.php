<?php
	/*
	 * 完成PHP连接MySQL数据库的步骤
	 * PHP有关MySQL数据库的扩展(预定义函数)
	 * * mysql  - 原生MySQL API
	 * * mysqli - MySQL增强版扩展 
	 */
	/*
	 * 1. 创建与MySQL数据库的连接
	 *  mysqli_connect(host,username,passwd,dbname,port)
	 *  * host - MySQL数据库所在服务器的IP地址
	 *  * username - 登录MySQL数据库的用户名
	 *  * passwd - 登录MySQL数据库的密码
	 *  * dbname - 指定登录的数据库名称
	 *  * port - MySQL数据库的端口号
	 *
	 *  * 该方法的返回值 - 数据库连接对象
	 */
	$conn = mysqli_connect('127.0.0.1','root','','day1117','3306');

	//var_dump($conn);

	// 2. 定义SQL语句 - 字符串类型
	$sql = "INSERT INTO myuser VALUES(NULL,'miejueshitai','12345',86,'miejue@qq.com','emeishan')";

	/*
	 * 3. 发送SQL语句到MySQL数据库
	 *  mysqli_query(link,query)
	 *  * link - 表示MySQL数据库的连接对象
	 *  * query - 表示发送的SQL语句
	 *
	 *  * 该方法的返回值
	 *    * 如果执行成功
	 *      * INSERT|UPDATE|DELETE - true
	 *      * SELECT - mysqli_result对象
	 *    * 如果执行失败 - false
	 */
	$bool = mysqli_query($conn,$sql);

	//var_dump($bool);

	/*
	 * 4. 如果上述操作 - 查询(SELECT)语句
	 *  * 通过mysqli_query()方法,返回mysqli_result结果集对象
	 *  * 解析mysqli_result结果集对象
	 */
	
	/*
	 * 5. 关闭与MySQL数据库的连接
	 *  mysqli_close(连接对象)
	 */
	mysqli_close($conn);
?>