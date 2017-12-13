【HTTP】
URL:    -地址
	统一资源定位服务；网址，下载文件地址
URI：   统一资源标识符；
URL VS URI
所有的URL都是URI，但URI不一定是URL；

完整的URL：
网络协议： IP地址(虚拟地址)  ：端口号   /  路径    ;参数           ?查询数据            #锚点
http://    127.0.0.1        : 8080/11_SERVER&HTTP;JSESSION=123123213?key=value#mylink
ftp://  code.tarena.com     :80/14_SERVER&HTTP;JSESSION=123123213?key=value
  * 一般实际使用时
       * http://www.baidu.com/news
       * http://127.0.0.1:8888?key=value
       * http://localhost:80#mylink
完整的URL元素：
	- 网络协议
	- IP地址(虚拟地址) 
	- 端口号
		常用的：80
		数据库：3306
	- 路径
		相对路径：
		绝对路径：无论当前位置在哪，目标元素路径固定；
	- 参数
	- 查询数据
		key=value&key=value
	- 锚点

网络协议：
	客户端与服务器之间的协议；
	主流协议：
	http协议：   - https加密(openssl)协议；
	socket协议： - html5的web socket     ws://   多用于与C/S架构
	ftp协议，pop3协议等

- Http协议：
	多用于与B/S架构
	问题：
		短链接
	       * 每次客户端与服务器端交互时
		 * 先建立连接
		 * 交互完毕后,关闭链接

		无状态
	       * 服务器端只能记得住当次请求状态
	版本历史：
		HTTP 1.0 - 目前主流版本
		HTTP 1.1 - 较新版本(向下兼容）
		HTTP 2.0 - 最新版本

1.请求协议
	GET请求方式 - server.php?user=zhangwuji
	    - 请求行
	       -- 请求类型 - GET
		   * 请求类型
		     * GET - 最常使用的
		     * POST - 最常使用的
		     * HEAD
		     * PUT
		     * DELETE
		     * OPTIONS
		     * TRACE
		   * 请求类型的面试题
		     * 请求类型只有两种(错)
		     * 请求类型常用的有两种(对)
		     * 请求类型共有七种(错)
		     * 请求类型至少有七种(对)
		   * 标准API - 标准的请求方式:各种客户端请求方式统一；
		     * GET - 获取数据
		     * POST - 修改数据
		     * PUT - 新增数据
		     * DELETE - 删除数据

	       -- 请求地址 - URL?key=value
	       -- 状态码 - 服务器端的状态 200
		  * 状态码
		     * 1xx - 服务器端的信息
		       * 一般实际开发中很少出现
		     * 2xx - 表示请求成功
		       * 200 - 请求成功
		       * 201 - 创建连接
		       * 202 - 接收请求
		     * 3xx - 表示重定向
		       * 302 - 表示重定向
		       * 304 - 表示服务器端资源没有变化,访问缓存
			 * 问题 - 这次请求没有真正地访问服务器端
		       * 305 - 表示使用代理
		     * 4xx - 客户端错误
		       * 400 - 错误的请求
		       * 403 - 拒绝访问
		       * 404 - 网页找不到
		       * 405 - 请求类型不允许
		     * 5xx - 服务器端错误
		       * 500 - 服务器端错误
		       * 502 - 路径错误
		       * 504 - 请求超时
		       * 505 - HTTP版本不支持
	       -- 协议版本

	     - 请求头
	       -- 请求头的格式
		 * key : value
		 * key : value,value,value,...
	       -- 请求头的含义
		 * Accept - 表示服务器端接受的MIME类型
			   * MIME类型 - 文件类型
			     * MIME类型是如何定义的
			       // 定义MIME类型
			       <mime-mapping>
				  // 文件的扩展名
				  <extension>jpg</extension>
				  // 对应MIME类型
				  <mime-type>image/jpeg</mime-type>
			       </mime-mapping>
			     * 常见的MIME类型
			       * html - text/html
			       * htm  - text/html
			       * xhtml- application/xhtml+xml
			       * css  - text/css
			       * js   - application/javascript text/javascript
			       * json - application/json
			       * jpg  - image/jpeg
			       * jpeg - image/jpeg
			       * png  - image/png
			       * text - text/plain
			       * webm - video/webm
			       * mp4  - video/mp4
		 * Accept-Encoding - 表示服务器端是否接受压缩
		   * gzip - 是指一种服务器端的压缩格式
		   * 问题 - 客户端请求的数据内容越大
		     * 对网络带宽的要求越高,流量占用大
		     * 用户体验不好 - 速度慢、对服务器造成的压力大
		 * Accept-Language - 表示服务器端接受的语言
		   * zh-CN - 简体中文
		   * zh-TW - 繁体中文
		   * zh - 中文
		   * us - 英文
		 * Connection - 表示当前的连接状态
		   * keep-alive - 表示保持连接
		 * Host - 表示当前电脑的地址(IP:端口号)
		 * Referer - 表示当前的请求来源于哪里
		   http://127.0.0.1:8888/http/index.html
		   * 实现防盗链接
		 * User-Agent - 获取用户的浏览器信息
		   Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36
		   
		   Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0
		   
		   Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko
		 * Cookie - 将Cookie自动携带请求头
	    - 请求体 - 空
	POST请求方式
		-  请求行
			* 请求类型 - POST
			* 请求地址 - URL
			* 状态码 - 200 OK
			* 协议版本
		-  请求头
			* Cache-Control - 缓存控制
			 * max-age=0 - 设置缓存最大活动周期
			   * 0 - 表示没有缓存
			   * 设置缓存保存的最大时间的单位为毫秒/秒
			* Content-Length - 请求数据的长度(大小)
			* Content-Type - 请求的MIME类型
			 * application/x-www-form-urlencoded
			   * <form>元素提交请求时默认的类型
			   * 一般文件上传时,类型一定这种格式
		-  请求体
			* 请求参数
2.响应(Response)协议
	-  响应行
		* 状态码
		* 协议版本
	-  响应头
		* Connection - 表示当前的连接状态
		* keep-alive - 表示保持连接
		* Content-Length - 响应数据的长度(大小)
		* Content-Type - 响应数据的MIME类型
		* 一般情况下 - text/html格式
		* 设置响应页面编码 - charset=UTF-8
		* Date - 响应的日期时间
		Thu, 19 Nov 2015 08:17:03 GMT
		yyyy-MM-dd hh:mm:ss
		yyyy年MM月dd日 hh:mm:ss
		* Keep-Alive - 设置保持连接的超时和最大存活时间
		* timeout=5, max=99
		* 一般都是在Connection的值设置为keep-alive时
		* Server - 响应服务器端的信息
		Apache/2.4.10 (Win32) OpenSSL/1.0.1i PHP/5.6.3
	-  响应体
		* 服务器端向客户端进行响应的数据内容

3. HTTP基本优化
   * 域名解析
     * 在HTML页面尽量减少外部链接
       * <a hred=""></a>
       * <img src="" /> - HTML5的Canvas|SVG
       * <script src=""></script>
       * <link href="" />
       * <video src=""></video>
     * 尽量减少与其他网址交互
   * 创建连接
     * 尽量减少客户端与服务器端之间的交互
       * 减少请求的次数
       * 使用Ajax异步交互
       * 使用例如socket这种协议(实时连接)
   * 发送请求
     * 请求数据进行压缩
   * 等待响应
     * 主要从服务器端进行优化
       * 将响应数据进行压缩
       * 将缩短等待响应的时间 - timeout
   * 浏览器对HTML|CSS的解析,对javascript的解析
 * 安全的HTTP协议
   * HTTP协议
     * http://
     * 默认端口号为80
   * HTTP安全协议 - OpenSSL安全协议
     * https://
     * 默认端口号为443
     * 举例
       * 电商网站
       * 银行网站
       * ...
	POST请求方式

GET请求类型 VS POST请求类型
   * 请求参数
     * GET请求类型
       * 将请求数据 - URL?key=value(浏览器地址栏)
         * 安全相对比较低
       * 请求地址的长度是有限制的
         * 请求数据内容过多
       * 如果请求数据中包含中文的话,需要转码的
         * 更容易出现中文乱码问题
     * POST请求类型
       * 浏览器地址栏URL,不包含请求类型
         * 安全相对比较高
       * 请求数据在请求体中
         * 对请求数据的大小(长度)没有要求
       * 如果请求数据中包含中文的话,可以不转码
         * 相对来讲对于中文的处理比较好
   * unicode码
     * 金云龙 - %E9%87%91%E4%BA%91%E9%BE%99
     * 将中文内容转换成unicode码
     * 服务器端接收后,将unicode码转换为中文
     * Web应用的中文乱码问题
   * GET与POST请求方式的请求协议的区别
     * GET请求方式
       * 请求行
         * 请求类型 - GET
	 * 请求地址 - URL?请求参数
       * 请求体 - 空
     * POST请求方式
       * 请求行
         * 请求类型 - POST
	 * 请求地址 - URL
       * 请求体
         * 请求参数
   * 头信息
     * 通用(请求与响应)头信息
       * Connection
       * Content-Length
       * Content-Type
       * Date
     * 特殊响应头
       * 控制是否缓存的头信息
         * Cache-Control - 0 表示不缓存
	 * Expires - 0 表示不缓存
	 * 注意 - 是允许缓存
       * 控制头信息
         * HTML页面 - 使用<meta />元元素
	 * PHP页面  - header()函数设置头信息