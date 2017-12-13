【jQuery中的Ajax】
封装第一层：类似于原生Ajax用法
	- $.ajax()	最复杂
		$.ajax(options);
		url - 必要 设置ajax请求地址
		type - 请求类型，默认是get 
		async - 是否异步；默认true 异步；
		contentType - post发送数据前提；默认不用写；
		data - 设置ajax请求数据 key/value格式 构建Object
		success - 请求成功后的回调函数
					function(data,textStatus){}
					data:服务器响应的数据内容；
					textStatus: 
						ajax请求状态:success /
		error - 请求失败后的回调函数
					function(XMLHttpQequest,textStatus,errorThrown){}
					XMLHttpQequest:ajax核心对象
					textStatus： error / timeout / notmodified
					errorThrown：错误异常信息
		dataType:响应数据格式；html xml json;

封装第二层：基于第一层再次封装

	- load()	最简单，局限性最大
		$().load(url,data,callback);
		url - 必要 设置ajax请求地址
		data - 可选 设置ajax请求数据 key/value格式
		callback - 可选 请求成功后的回调函数
					该回调函数的形参就是服务器响应的数据内容；
		load(）请求类型：
			没有请求数据时，默认GET方式；
			发送请求数据时，类型是POST;
			load()的请求数据是由是否发送数据决定的；
		load(）接受服务器响应的数据时是以字符串(HTML)接受的；

	- $.get()	请求类型GET
		$.get(url,data,callback,type);
		url - 必要 设置ajax请求地址
		data - 可选 设置ajax请求数据 key/value格式 构建Object
		load(）请求类型：
			有没有请求数据时，都是GET方式；
		callback - 可选 请求成功后的回调函数
					该回调函数的形参(data)就是服务器响应的数据内容；
		type - 设置服务器端响应的数据格式：
				默认html
				xml,html,json

	- $.post()	请求类型POST
		使用方式与get一致；

封装第三层：特殊用法
	- $.getScript()	动态读取脚本
		$.getScript(url,callback);
		url:请求地址可以是本地的，也可以是服务器的；

	- $.getJSON()	接受JSON格式数据
跨域请求 - $.getJSON()方法
跨域
	完全跨域 - IP不同
	http://www.baidu.com
	http://www.tedu.cn
	跨子域 - IP相同,但端口号不同
	http://127.0.0.1:8888
	http://127.0.0.1:9999
域名
	顶级域名
	http://www.baidu.com
	二级域名
	http://wenku.baidu.com
	http://www.baidu.com/kongjian
万维网协议 默认是不允许跨域请求的
实现跨域

表单的ajax异步请求：
表单序列化：
- serialize()        返回值:String JSON字符串 {key:value,key:value}
		例：var data=$('#myform').serialize();
		使用表单元素的name属性值；***********

- serializeArray()   返回的是JSON对象而非JSON字符串 [obj1,obj2,obj3]

 jQuery.form插件
	作用 - 实现表单的异步提交
	两个核心方法
		ajaxForm()方法
		ajaxSubmit()方法 - 使用Ajax异步提交表单
	底层机制
		表单提交机制
	表单异步提交的方式
		不再使用submit按钮,而是使用button按钮
		通过为button按钮绑定click事件
		  表单的序列化
		  表单的异步提交
		(常用)依旧使用submit按钮
	在<form>元素绑定onsubmit事件
	在onsubmit事件的处理函数中
		表单的序列化
		表单的异步提交
		阻止表单默认行为(return false)



Cookie
基本内容
浏览器的缓存
	存储在浏览器内存中
	关闭浏览器(窗口)后,数据会被自动销毁
存储在用户电脑硬盘中
	关闭浏览器(窗口)后,数据不会被销毁

Cookie(小甜饼)
	缓存文件 - 一些用户数据存储在此
问题
	用户数据是以明码(明文)来存储的
	Cookie谁都可以读取
	A网站生成的Cookie文件,归属到百度
如何操作
	读取Cookie - 将用户名或密码从Cookie读取
	document.cookie
	写入Cookie - 将用户名或密码写入到Cookie文件
	格式 - key=value;expires=时间
	document.cookie