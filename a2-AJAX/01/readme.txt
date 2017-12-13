【Ajax】
同步交互与异步交互
同步交互：客户端向服务器端发送请求，服务器响应的过程中，用户 不能 做 任何 事情；
异步交互：客户端向服务器端发送请求，服务器响应的过程中，用户 可以 做 其他 事情；

AJAX : Asynchronous JavaScript and xml;
       (不严格定义)客户端与服务器端进行交互，无需刷新当前压面；
	AJAX实现的是 B/S 下的异步交互；

实现异步交互的技术：
	<iframe src="" />
	百度地图

同步 VS 异步
同步：
	执行速度相对慢
	响应的是完整的HTML页面
异步：
	执行速度相对快
	响应部分数据


AJAX具有一个核心对象：
	XMLHttpRequest对象；集成在浏览器中，
	创建XMLHttpRequest对象：
	function getXHR(){
		var xhr=null;
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHttp');
		}
		return xhr;
	}
	var xhr=getXHR();

AJAX的核心对象：
    属性：
	readyState	监听服务器当前的通信状态
	status		判断服务器端状态码
	responseText	接受服务器数据
    方法：
	open(method,url,async)	 与服务器建立连接
				 - async 设置是否异步
	send()			 向服务器发送请求
    事件：
	onreadystatechange

实现ajax异步交互步骤：
	1.创建XMLHttpRequest对象
	2.与服务器端建立连接；open(method,url,async);
		async:设置是否异步，默认true，异步；
		官方认为XMLHttpRequest对象就是为了实现异步操作的；写false会出错；
	3.向服务器端发送请求：send("请求参数")
		请求参数格式：key=value；
		如果请求的是get方式：send不起作用，但不能省略；send(null );
	4.客户端接受服务器端的响应：
		onreadystatechange事件- 监听服务器

		readyState属性：得到服务器当前的通信状态；
		0 服务器端尚未初始化
		1 客户端正在发送请求，服务器正在接受请求
		2 客户端请求完成，服务器接受完成；
		3 请求成功，客户端正在接受服务器的数据，正在响应
		4 响应完成，

		使用status属性，判断服务器端状态码(200)

		responseText属性
		接受服务器数据 格式（html）

GET与POST的区别
GET请求类型：
	send()方法不起作用，但不能神省略；
	xhr.send(null)
	请求参数添加到 url?key=value;
POST请求类型：
	send()方法起作用,但必须要在send()之前，使用setRequestHeader()方法设置请求头；
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

另外一种实现ajax异步交互步骤：
	1.创建XMLHttpRequest对象
	2.注册监听；- onreadystatechange事件；
	3.与服务器端建立连接；open(method,url,async);
	4.向服务器端发送请求：send("请求参数")

实现ajax异步交互的6步：
	1.创建XMLHttpRequest对象
	2.建立连接
	3.发送请求
	4.注册监听
	  5.获取服务器当前的通信状态
	  6.判断服务器端状态码(200)
