学习SERVER的原因:
	招聘 - Web前端(熟悉或了解某种服务器端技术优先)
	工作 - 与服务器端人员配合
	学习 - 掌握或了解Web应用的整体架构

 服务器概念
	服务器(SERVER)其实就是一台PC机(硬件)
	服务器的分类
		硬件服务器 - PC机
			电脑硬件 - PC机/小型机/刀片机/中型机/大型机/超级计算机
			小型机 - IBM(AIX)/HP/联想(Linux)
		软件服务器 - 中间件
			为了运行Web应用的一种软件
软件架构
        B/S - 浏览器(browser)/服务器端(server)
		互联网-企业级
			  互联网 - 网易、腾讯、百度等
			  企业级 - 银行系统、医院系统等
		好处
			  软件升级 - 服务器端的升级
        C/S - 客户端(client)/服务器端(server)
		先出现,例如QQ、Email等
		原因 - 网络带宽/电脑硬件普遍偏低
		问题
			  软件升级 - 客户端\服务器端都要升级

软件服务器
	Web(应用)服务器 - 用于运行Web应用
	数据库服务器 - 用于运行数据库产品
访问Web应用
	http://www.baidu.com
	网络协议-IP地址-端口号

【XAMPP软件】
【Apache】 - 软件服务器(运行PHP)
	1.启动失败
		原因 - 端口号被占用
		错误信息 - Error: Apache shutdown unexpectedly.
		解决
		  config选项-<Browse>[Apache]-conf目录-httpd.conf文件
		  修改 - Listen 8888(端口号)
		如何访问
		http://localhost:端口号
		http://127.0.0.1:端口号
        2.设置虚拟地址
		目录 - C:\Windows\System32\drivers\etc
		打开hosts文件 -- 127.0.0.1 www.yun.com
        3.关于80端口号
		在开始菜单输入"cmd"运行命令行窗口
		在命令行窗口输入命令
		 netstat -ano
		找到占用80端口号对应PID值
		在任务管理器中的"进程",找到对应的进程,结束
        4.在本地搭建Web应用程序
		目录 - XAMPP软件的安装路径-htdocs
		将该目录的所有文件删除
		创建index.html页面文件
		重新在浏览器中访问虚拟地址,页面内容

【MySQL】 - 数据库服务器(运行MySQL)
	MySQL默认使用的端口号 - 3306 ；不建议修改该端口号
        1.命令行方式登录(打开)数据库
		登录数据库 : mysql -u用户名root -p密码
		退出数据库 : exit;
	2.同时启动Apache和MySQL服务
		点击mysql 的 admin 访问地址 - http://localhost:8081/phpmyadmin 8081Apache的端口号；
		phpMyAdmin服务是Apache提供的(连接数据库)

	数据库 - 数据仓库,用于存储或操作数据内容
		两大阵营
		- 关系型数据库(SQL) - 是目前主流数据库,是以表(行和列)的形式存储数据;
		- 非关系型数据库(NoSQL) - 是新潮流数据库,是以文档方式存储数据,是以key:value形式存储数据
		...

		NoSQL
		是一种运动(抗议关系型数据库)
		逐步发展之后,出现很多这种产品
		主流的产品
		mongoDB - JSON格式
		...

		关系型数据库
		Oracle - 甲骨文(Oracle)公司的产品; 企业级开发98%市场份额都是使用这款产品
			Oracle认证
				初级 - 月薪10K - 15K
				中级 - 月薪15K - 20K
				高级 - 
		MySQL - 甲骨文(Oracle)公司的产品; 互联网开发98%市场份额都是使用这款产品
		SQL Server :是微软公司推出的;只提供Windows操作系统版本
		Access(Office套件的组件) :是微软公司推出轻量级数据库;DB2
		
		MySQL产品
			是瑞典MySQL AB公司开发的
			后期被SUN公司收购(SUN公司最主要产品-Java)
			SUN公司被Oracle公司收购
			特点
			  免费
			  开源
			目前两种版本
			  社区版本 - 免费
			  商业版本 - 收费
	        LAMP组合 - 目前开发互联网网站
		  L - Linux
		  A - Apache
		  M - MySQL
		  P - PHP

	SQL语言 - 无论数据库产品,使用SQL语言
		DDL - 数据定义语言(数据库+表)
		DCL - 数据控制语言(权限)
		DQL - 数据查询语言
		DML - 数据操作语言
	注意
		SQL语言并不区分大小写(官方建议大写)
		SQL语句编写完毕后,一定增加";"结束符 - 命令行中
		SQL语言使用字符串时,建议使用单引号'

	一.DDL(了解) - CREATE|ALTER|DROP
	      1.数据库操作

		创建数据库
		  用法 - CREATE DATABASE 数据库名称 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
		查看数据库
		  用法 - SHOW DATABASES;
		修改数据库
		  用法 - ALTER DATABASE 数据库名称 CHARACTER SET utf8;
		删除数据库
		  用法 - DROP DATABASE 数据库名称;
		使用(切换)数据库
		  用法 - USE 数据库名称;
		注意
		  数据库一旦被创建,很少修改或删除
		  创建、查看和切换数据库

	     2. 数据表操作

		数据类型
		  数值(Number)数据类型
		    INT - 整数
		    FLOAT/DOUBLE - 浮点型(小数)
		    DECIMAL - 精确值(金额等)
		  日期(Date)数据类型
		    DATE - 日期(默认格式:yyyy-MM-dd)
		    DATETIME - 日期时间(yyyy-MM-dd hh:mm:ss)
		    TIMESTAMP - 时间戳(标识:唯一)
		  字符串(String)数据类型
		    CHAR - 长度固定的字符串
		      定义一个字符串的长度为10,实际存储的内容为"abc",未被字符占用的位置会以空格补位
		    VARCHAR - 长度可变的字符串
		      定义一个字符串的长度为10,实际存储的内容为"abcde"
		创建数据表
		 CREATE TABLE 表名(
		   字段名称1  数据类型,
		   字段名称2  数据类型,
		   ...
		 );
		  约束
		    主键约束 - PRIMARY KEY
		      作用 - 唯一,不可重复
		    主键自增约束 - AUTO_INCREMENT
		      作为主键的字段,自增
		 案例:创建用户表(id,name,pwd,age,email,addr)
		 CREATE TABLE myuser (
		   //标识(唯一,不可重复)
		   id  INT PRIMARY KEY AUTO_INCREMENT,
		   name  VARCHAR(30),
		   pwd	 VARCHAR(30),
		   age   INT,
		   email VARCHAR(30),
		   addr  VARCHAR(30)
		 );
		 练习:创建订单表myorder(orderid,ordername,price,addr,ordertime)
		  orderid - 订单表的标识(唯一)
		  ordername - 订单表的名称
		  price - 金额
		  addr - 收货地址
		  ordertime - 订单日期
		删除数据表
		  用法 - DROP TABLE 表名;
		查看表结构
		  用法 - DESC 表名;

        二.DML(增删改) - INSERT|UPDATE|DELETE
	      1.插入(新增)数据
		用法一
		 INSERT INTO 表名 VALUES(字段值1,字段值2,...);
		  注意
		    当前表具有多少字段,VALUES输入多少字段值
		    如果哪个字段是主键自增的话,使用NULL补位
		用法二
		 INSERT INTO 表名(字段名1,字段名2,...) VALUES(字段值1,字段值2,...)
		  注意
		    表名后定义多少字段,VALUES后输入多少字段
		    当前数据表的字段是允许为空的
		练习 - myorder表
		 1. 插入orderid,ordername,price,addr,ordertime
		    INSERT INTO myorder VALUES(NULL,'linghuchong',3.5,'huashan','2015-11-17 15:44:40')
		 2. 插入ordername,addr,ordertime字段值
		    INSERT INTO myorder(ordername,addr,ordertime) VALUES('renyingying',10,'heimuya')

	      2.更新(修改)数据
		用法一 - UPDATE 表名 SET 字段名=字段值;
		  注意 - 修改所有数据(指定字段值)
		用法二
		 UPDATE 表名 SET 字段名=字段值 WHERE 字段名=字段值;
		  SET后面的"字段名=字段值",为设置的值
		  WHERE后面的"字段名=字段值",为查询的值
		用法三
		 UPDATE 表名 SET 字段名1=字段值1,字段名2=字段值2 WHERE 字段名=字段值;
		练习:修改myorder表
		  修改addr字段值为"光明顶"
		   UPDATE myorder SET addr='光明顶';
		  修改id为2记录的price修改为100
		   UPDATE myorder SET price=100 WHERE orderid=2;
		  修改addr为"光明顶"记录的ordertime为"2020-11-11 00:00:00"
		   UPDATE myorder SET ordertime='2020-11-11 00:00:00' WHERE addr='光明顶'

	      3.删除数据
		用法一 - DELETE FROM 表名;
		  注意 - 删除指定表中所有数据
		用法二 - DELETE FROM 表名 WHERE 字段名=字段值;
		问题 - 实际操作
		  实际的开发中基本不使用DELETE语句
		    以防我们的用户反悔
		SQL操作(删除)
		  物理删除 - 执行DELETE语句
		  逻辑删除
		    简单来说,对于用户来讲是删除的,对于实际来讲并没有删除
		    为指定表,增加一个字段(state|status),表示当前这条记录是什么状态
		      值为1的话,表示这条记录是正常的
		      值为0的话,表示这条记录是删除的

       三.DQL(查)
	      基本查询 - 新版本一样
		用法一 - SELECT  FROM 表名;
		用法二 - SELECT 字段名1,字段名2,... FROM 表名;
	      条件基本查询
		用法 - SELECT * FROM 表名 WHERE 字段名=字段值;
	      复杂条件查询
		AND - 表示多个条件同时满足
		OR - 表示其中一个条件满足
		IN(SET) - 表示一个字段包含多个值
		  SET - 多个值,之间使用","
		= - 表示字段值为指定值
		BTWEEN AND - 等于 >= AND <=
		IS NULL - 匹配NULL值
	     
	      排序查询 - ORDER BY 字段名
		ASC - 正序排序,默认值
		DESC - 倒序排序

	       SELECT * FROM 表名 WHERE 条件 ORDER BY 字段名;
	     
	     练习 - myorder
	       1. 查询addr为"光明顶"的所有记录
		  SELECT * FROM myorder WHERE addr='光明顶';
	       2. 查询id为1或ordername为"renyingying"的所有记录
		  SELECT * FROM myorder WHERE id=1 OR ordername='renyingying';
	       3. 查询id为1,2,3的所有记录
		  SELECT * FROM myorder WHERE id in(1,2,3);
	   
   
   * 命令行方式登录MySQL
      输入mysql命令,提示"mysql"不是内部命令
      原因 - 系统环境变量中没有配置MySQL的变量
      解决
        进入到MySQL的安装目录中
        进入到bin目录中,找到mysql.exe文件
        执行mysql.exe文件

        在命令行中输入命令
          cd mysql的安装目录/bin
	  mysql命令
    数据库操作原则 - 只增不删
    数据库的空
      '' - 空字符串
      NULL - 值不存在


    Tomcat - 软件服务器(运行Java)
