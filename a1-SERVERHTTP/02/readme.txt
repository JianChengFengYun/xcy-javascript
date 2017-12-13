【PHP】
js ：客户端脚本；
     
php：服务器端脚本；
    *不能鼠标右键，直接使用浏览器打开；
    应该运行在服务器上（Apache）
    可嵌入 到 html页面；
    允许编写html代码；
    允许编写php代码；
    扩展名为.php;

PHP VS HTML
PHP :动态页面，
     动态资源：根据用户操作，动态变化；
HTML:静态页面，
     静态资源：html / css / js;

创建php文件：
	1.扩展名为.php;
	2.以"<?php"开始；以"?>"结束；
	3.使用echo输出；

关键字：
echo	       :输出(浏览器中)一个或多个字符串；
echo("字符串") :使用方式类似于函数调用；

php语法：
常量与变量
	常量 ：一旦定义，值不能改变；否则报错；
		const 常量名=常量值；
		define(常量名,常量值);
	变量：
		$变量名=变量值；

数据类型：
	四种标量类型：
		- boolean
			true	echo输出为 1		使用var_dump()输出为 bool(true);
			false	echo输出为 ""空字符	使用var_dump()输出为 bool(false);
		- integer	 整数；
		- float / double 浮点数；
		- string
			单引 '':定义固定字符串；
			        性能比较高；
			        使用var_dump()输出为 string(字符个数) 字符串;

			双引 "":如果有变量名，可以识别并输出；
			        性能相对低；

		** var_dump()输出变量的类型和值；

	两种复合类型：
		- array
			定义数组：
			1.类似于js，直接量方式：如
				$arr=[1,2,3,4,5];
			2.索引数组：如
				$arr=array(
					0 => 1,
					1 => 2,
					2 => 3
				   索引值 => 元素内容
				)
			3.关联数组：如
				$arr=array(
					"first" => 1,
					"two"	=> 2,
					"three" => 3
					key(健) => 元素内容
				)
		- object
			1.使用new关键字实例化一个类；
				class foo
				{
				    function do_foo()
				    {
					echo "Doing foo."; 
				    }
				}

				$bar = new foo;
				$bar->do_foo();

	两种特殊类型：
		- resource ：资源
			作用：保存外部资源的一个引用；
			使用场景：
				在文件上传中，保存上传文件；
		- NULL

运算符：
	基本与js一致；
	字符串连接不再是:"+",而是点"."；

循环结构：
	while
	do while
	for
	foreach 
	 foreach(数组 as key => value){}
选则结构：
	if...else...
	switch...case...

php预定义变量：
	- $_GET		接收客户端以请求类型为GET方法发送的数据内容
	- $_POST	接收客户端以请求类型为POST方法发送的数据内容
	- $_REQUEST	$_GET、$_POST等
	- $_FILES	专门用于文件上传；
	- $_COOKIE	接受客户端保存的Cookie数据；

php预定义函数
	数据库扩展；

php连接mysql数据库；
准备工作：
	1.xamPP的目录中->php->ext 必须要有文件：
		php_mysql.dll
		php_mysqli.dll
	2.xamPP的目录中-php: php.ini里必须要有代码：
		extension=php_mysql.dll
		extension=php_mysqli.dll

连接mysql数据库:
     - 过程化风格
	 1. 创建与MySQL数据库的连接
		 * PHP有关MySQL数据库的扩展(预定义函数)
		 * * mysql  - 原生MySQL API
		 * * mysqli - MySQL增强版扩展 

		 *  mysqli_connect(host,username,passwd,dbname,port)
		 *  * host - MySQL数据库所在服务器的IP地址
		 *  * username - 登录MySQL数据库的用户名
		 *  * passwd - 登录MySQL数据库的密码
		 *  * dbname - 指定登录的数据库名称
		 *  * port - MySQL数据库的端口号
		 *
		 *  * 该方法的返回值 - 数据库连接对象

		如：$conn = mysqli_connect('127.0.0.1','root','','day1117','3306');

	2. 定义SQL语句 - 字符串类型
		如：$sql = "INSERT INTO myuser VALUES(NULL,'miejueshitai','12345',86,'miejue@qq.com','emeishan')";
		
	3. 发送SQL语句到MySQL数据库
		 *  mysqli_query(link,query)
		 *  * link - 表示MySQL数据库的连接对象
		 *  * query - 表示发送的SQL语句
		 *
		 *  * 该方法的返回值
		 *    * 如果执行成功
		 *      * INSERT|UPDATE|DELETE - true
		 *      * SELECT - mysqli_result对象
		 *    * 如果执行失败 - false
		 
		如：$bool = mysqli_query($conn,$sql);

		//var_dump($bool);

	4. 如果上述操作 - 查询(SELECT)语句
		 *  * 通过mysqli_query()方法,返回mysqli_result结果集对象
		 *  * 解析mysqli_result结果集对象5.关闭与MYSQL连接；

	5. 关闭与MySQL数据库的连接
		 *  mysqli_close(连接对象)
		 */
		如：mysqli_close($conn);

    - 面向对象风格：
	1.创建MYSQL或MYSQLi对象
	$mysqli=new mysqli(host,username,passwd,dbname,port)
	相当于与MYSQL建立连接

	2.定义sql语句
	$sql="INSERT INTO myorder VALUES(NULL,'zhangsanfeng','86','wudanshang','2015-11-18')";

	3.调用mysqli对象的query()方法；
	$mysqli->query($sql)
	//该方法返回执行结果：
	$result=$mysqli->query($sql);

	4. 如果上述操作 - 查询(SELECT)语句
	*  * 解析mysqli_result结果集对象

	5.调用mysqli对象的close()方法
	$mysqli->close();

中文乱码问题：
       * 执行mysqli_query($conn,'SET NAMES UTF8');
       * 执行$mysqli->query('SET NAMES UTF8');

结果集对象:
	mysqli_query()方法执行的SELECT语句
	 * * 该方法的返回值为mysqli_result对象
	 *   * 属性
	 *     * num_rows - 得到记录条数
	 *     * field_count - 得到字段数量
	 */
	$result = mysqli_query($conn,$sql);
	属性：
	num_rows:记录数据条数；
	field_count:字段数量；

	方法：
       * mysqli_fetch_array(结果集对象)
         * 返回数组
       * mysqli_fetch_object(结果集对象)
         * 返回object

 * 案例 - 开发完整的Web应用(客户端|服务器端|数据库)
   * 用户登录功能 在服务器打开 http://localhost:8081/php/demo/login.html
   * 用户注册功能
     * 先查询用户名是否存在
       SELECT * FROM 表名 WHERE name=用户名
       * $result->num_rows - 0(不存在)
       * $result->num_rows - 不为0(存在)
     * 再插入数据内容



