【Ajax】
接受服务器的响应数据：
	使用XMLHttpRequest核心对象的responseText属性；该属性只能接受文本(HTML)格式；
	问题：
		解析过程复杂；
		拼串容易错误；
	使用XML格式，json格式替代 文本格式；

【XML格式】
基本内容：
	HTML XHTML DHTML XML的区别；
	HTML： 网页,元素定义大小写；
	XHTML：严格意义的HTML，元素定义小写；
	DHTML：BOM | DOM
	XML：  配置文件 | 数据格式

XML文件扩展名“.xml”;
XML 的定义方式与HTML相似；HTML中的元素是预定义好的，XML中标签是自定义的；

XML 的作用：
	作为数据格式 - 存储数据

XML 语法：
	1.声明：<?xml version="1.0" encoding="UTF-8" ?> 
		- 申明只能放在第一行，而且前面不能有空格；
		- version:设置xml的版本；
			xml的版本：
			1.0 版本 - 主流 目前唯一版本；
			1.1 版本 - 几乎没人用；
			版本不会再更新；
		- encoding：设置xml文件的编码格式；
	2.定义元素：
		- 根元素：  必须是起始标签，只能定义一个；
		- 定义元素：定义起始标签或单标签都可以，标签名可以重复使用；
		- 定义属性：
		- 定义注释：<!--- --->

 DOM解析XML
     * 创建XML的解析器
       function parseXML(xml){
          // 声明解析XML后的DOM对象
	  var xmlDoc = null;
	  // 根据不同的浏览器
	  if(window.DOMParser){
	     // 其他浏览器
	     var parser = new DOMParser();
	     xmlDoc = parser.parseFromString(xml,"application/xml");
	  }else{
	     // IE浏览器
	     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	     xmlDoc.async = false;
	     xmlDoc.loadXML(xml);
	  }
	  return xmlDoc;
       }
     * 解析XML与解析HTML一致
       * 很少使用ById和ByName两个方法
     * 注意
       * 浏览器不允许读取外部的XML文件
       * 浏览器解析符合XML格式的字符串

Ajax中的XML格式
     -  请求的数据格式 - XML
        客户端如何构建符合XML格式的数据
              构建的数据类型 - 字符串(string)类型
	      字符串的内容符合XML格式的语法要求
        服务器端如何接收符合XML格式的数据
              接收客户端的请求数据 - 字符串(string)类型
		  PHP集成了DOM的相关内容
		    DOMDocument类
		    DOMElement类
		    DOMNode类
     -  响应的数据格式 - XML
        服务器端如何构建符合XML格式的数据
             设置服务器端的响应头"Content-Type"值为"text/xml"
	     构建符合XML格式数据内容
	         手动方式构建字符串(string)内容
		    DOMDocument对象的方法
		      loadXML(符合XML格式的字符串);
		      saveXML()方法进行响应
        客户端如何接收符合XML格式的数据
              使用XMLHttpRequest对象的responseXML属性接收
	      接收回来的就是XML DOM对象(不需要使用XML解析器进行解析)
	      直接使用DOM解析XML DOM对象即可
      练习 - 二级联动(服务器端响应数据格式为XML格式)

【JSON格式】
基本内容
     JSON - JavaScript Object Notation(JS原生支持)
     JSON数据格式源于javascript

特点
	易于程序员阅读和编写
	易于计算机解析和生成
	JSON目前是网络上使用最广泛的数据格式之一

JSON的结构
	Array - 数组
	Object - 对象
	支持的数据类型
		String字符串
		Number数值
		Boolean - true|false
		Object
		Array
		null

Ajax中的JSON格式
     - 请求格式为JSON
	   客户端向服务器端发送请求为JSON格式的数据
		 构建符合JSON格式的字符串
		 保证定义字符串时,使用单引号(里面使用双引号)
	   服务器端接收JSON格式的数据
		 接收客户端的数据
		 使用json_decode()函数进行解析
		   json_decode($json,true)；传入参数true，转换成数组；
     - 响应格式为JSON
           服务器端向客户端发送响应为JSON格式的数据
                 使用json_encode()函数将PHP变量(array)转换成符合JSON格式的字符串
           客户端接收JSON格式的数据
		 使用XMLHttpRequest对象的responseText属性接收
		   没有responseJSON属性
		 使用eval()函数进行转换

作业 - 使用JSON格式完成二级联动

HTML(文本格式)、XML格式及JSON格式的优缺点   ****
HTML格式
	优点 - 简单
	缺点 - 解析复杂
XML格式
	优点 - 易于构建复杂数据
	缺点 - 构建、解析复杂
JSON格式
	优点 - 轻量级
	缺点 - 可能转换失败

回顾内容
DOM - 独立于任何开发语言的
DOM的分类
	DOM CORE
	DOM HTML
	DOM XML
	DOM CSS
	DOM API
	获取元素
	创建元素
	替换元素
	删除元素
	插入元素
        ...