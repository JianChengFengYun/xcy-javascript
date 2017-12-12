回顾：
1. Form对象：
	如何找到：document.forms[序号|name]
	如何找到数据采集的元素：
	document.forms[序号|name].elements[序号|name]

	让元素获得或失去焦点：elem.focus()
	elem.blur()

	获得/失去焦点的事件：onfocus   onblur

	获得当前正在获得焦点的元素：document.activeElement

	事件：onsubmit 在表单正式提交前自动触发
	对整个表单执行验证
	form.onsubmit=function(){
	只要任意一个验证未通过，
	就*取消事件*:2步：
	1. 获得event对象e: 
	var e=window.event||arguments[0];
	if(e.preventDefault){
		e.preventDefault() //DOM
	}else{	
		e.returnValue=false //IE8  
	}

	表单提交：2种：
	- 直接点submit按钮；
	- 如果当前form中任意元素获得焦点，可按回车自动提交；
	只要自动表单提交前，都会先触发onsubmit，可做验证

【BOM】
BOM:操作浏览器窗口的对象；
1.window对象：2个角色；
	- 充当全局对象；
	- 所有BOM对象的上级；

	属性：(只能获取，不能设置)
	- innerHeight;文档显示区的高度
	- innerWidth;
	- outerHeight;窗口高度；
	- outerWidth
	- pageYOffset;文档左上角到文档显示区左上角的距离；
	- pageXOffset;
	
	打开连接：4种；
	- 在当前窗口打开新连接，可后退；		
	  html: target="_self"；
          js:[window.]open("url","_self")

	- 在当前窗口打开新连接，禁止后退；
	  js:location.replace("新url");

	- 在新窗口打开，可重复打开
	  html: target="_blank"；
          js:[window.]open("url","_blank")

	- 在新窗口打开，不可重复打开
         target-->目标窗口的名称
         _self: 自动获得当前窗口名称
         _blank: 创建一个新窗口，随机生成一个不重复的名字

         *窗口名：内存中同一个窗口名只能打开一个；后打开的，会替换先打开的；

	  html: target="自定义窗口名"；
          js:[window.]open("url","自定义窗口名")；

2.窗口大小与定位：
	大小：
	1. window.innerHeight/Width: 文档显示区宽高
	   outerHeight/Width: 整个窗口的宽高

	2. screen.height/width: 桌面完整分辨率宽高
	   screen.availHeight/availWidth: 去掉任务栏后剩余分辨率的宽高

	3. 调整大小：window.resizeTo(width,height)
	   调整到
	   resizeBy(变化的width,变化的height)

	位置：
	1. 左上角x坐标：window.screenLeft||window.screenX;
	         y坐标：window.screenTop||window.screenY;
	2. 将窗口移动到指定坐标：window.moveTo(x,y)
	3. 事件发生时，鼠标相对于整个屏幕的坐标：
	   event.screenX|screenY


3.定时器：动画；***	[4_1.html]
	定时器：让浏览器按指定时间间隔反复执行同一任务
	2种：
	周期性定时器：让浏览器按指定时间间隔反复执行同一任务，如果不手动停止，则一直反复执行
	一次性定时器：让浏览器等待一段时间间隔，执行一次任务，自动停止。

	在一次性定时器的结尾，每次都重新启动一个一次性定时器
	建议：尽量使用一次性定时器，代替周期性定时器

	如何使用：周期性和一次性用法完全相同的
	周期性：3件事：
	1. 动画的每一步要执行的任务(函数对象)
		function step(){
		每一步要做的事情
		}
	2. 将一步的任务放入定时器，反复调用
		timer=setInterval(step,间隔毫秒数)
	3. 必须用全局变量，临时存储定时器的编号
		clearInterval(timer)

	一次性：3件事
	1. 动画的每一步要执行的任务(函数对象)
		function step(){
		每一步要做的事情
		/*根据条件判断是否有必要继续启动下一个定时器*/        }
	2. 将一步的任务放入定时器，反复调用
		timer=setTimeout(step,间隔毫秒数|等待毫秒数)
	3. 必须用全局变量，临时存储定时器的编号
		clearTimeout(timer)
		停止正在等待的定时器
