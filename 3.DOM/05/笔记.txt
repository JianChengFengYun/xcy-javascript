【常用BOM对象】
- navigator：保存浏览器配置信息的对象；
	-- cookieEnabled:判断当前浏览器是否启用cookie；(6.html) 
	   cookie：是用户在客户端存储数据的文件；window.navigator.cookieEnabled;
	   清除cookie，
	-- plugins: 保存所有插件对象的集合
	-- userAgent: 保存了浏览器名称，版本号的字符串

- history：window保存当前窗体访问过的url的历史记录栈；(2_1.html)
	history.go(1):前进一次；
	history.go(-1):后退一次；
	history.go(0):刷新当前页；
	
- location：当前窗口正在访问的url地址对象；
	location.search		获取url里查询字符串（？之后部分）；先用“&”分割，再用“=”分割；
	location.replace("新url") 在当前窗口打开新连接，不可后退；
	使用location打开新连接：在当前窗口：
	- location.href="新url";		可后退；
	- location.assign("新url");	可后退；
	- location.reload();	reload当前页面，刷新；有修改就去服务器找，

- screen：当前屏幕的显示信息；
	screen.Height/Width:完整屏幕宽高；
	       availHeight/availWidth: 去掉任务栏屏幕宽高
	       win7下相同；
request
response

【事件】
浏览器自动触发的或用户手动触发的对象状态的改变；
DOM Leve12 Event标准；IE8自成体系；
时间处理函数：当事件触发时，自动执行的函数；

1.事件定义：3种；
	html：	<div onXX="fun()"></div>
			div.onclick=function(){
				eval("fun()");
			}
			 强调：fun()中this是window；
			 如果获得当前目标对象：
			 html：onXX="fun(this)"
			 js：  fun(elem){};

	js：	elem.onXX=函数对象；
		一个元素的一个时间处理函数，只能绑定一个函数对象；

	DOM标准：elem.addEventlisterner("事件名","函数对象",是否捕获阶段触发);
		一个元素的一个时间处理函数，能绑定多个函数对象；

	IE8：	 elem.attachEvent("on事件名"，"函数对象")
		IE8的事件周期：没有捕获；

2.事件周期：浏览器捕获到事件触发后，一直到最后一个事件触发完所经历的过程；
	DOM标准：3阶段；
	- (由外向内)捕获；从最外层html元素开始，向内逐层“记录”每层元素绑定的事件处理函数；到目标元素为止；
	- 目标触发；自动执行目标元素上绑定的事件处理函数；
	- (由内向外)事件冒泡；从目标元素的父元素开始“逐层”向上执行每层的事件处理函数；到最外层html结束；

3.event对象：当事件发生时，自动创建，封装了事件信息；
	1.获得event对象：
	  - html：	<div onXX="fun(event)"></div>
			   实际调用时，event会自动获得当前时间对象；
			   js： fun(e){};
			   没有兼容问题；
	  - js：elem.onXX=函数对象；
		function(){
			DOM标准：自动创建event对象，默认是arguments第0个；
			IE:window全局的event属性；当时间发生时，自动创建event对象，保存在window.event中；
		}

	2.event对象包含：
	  - 目标元素对象：var src=e.srcElement||e.target;

	3.取消 / 利用冒泡
	  - 取消冒泡:
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancleBubble=true;
		};
		一般放在事件结尾取消冒泡；

	  - 利用冒泡:如果多个子元素中定义了相同的事件处理函数，在父元素上定义一次即可；
		- 事件委托；

	4.取消事件；表单提交前如果验证未通过，如果验证,取消提交事件；
	if(e.preventDefault){
		e.preventDefault() //DOM
	}else{	
		e.returnValue=false //IE8  
	}
事件坐标：3种坐标系
 1. 相对于显示器: 
      最大值: screen.availHeight/availWidth 
      鼠标位置: e.screenX/Y
 2. 相对于文档显示区
      最大值：window.innerHeight/Width
      鼠标位置：e.clientX/x; e.clientY/y
 3. 相对于父元素左上角
      最大值：父元素的宽和高
      鼠标位置：e.offsetX/Y 












