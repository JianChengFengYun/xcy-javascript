
1.RegExp(正则表达式对象)
	封装了正则表达式；提供了利用正则表达式执行验证和查找的API；
	何时使用：利用正则表达式执行验证和查找功能；
	如何创建：
		1.var reg=/正则表达式/ig;		      正则不能用变量；
		2.var reg=new RegExp("正则表达式字符串","ig"); 正则能用变量；为了与字符串区分，字符串里的\必须改为\\;不然计算机会认为\d是转义；

		如果正则表达式在运行时不会改变，用第一种；如果需要切换，用new；

		3.使用：
			1.格式验证：var bool=reg.test(str); 验证str是否符合reg规定；要加^$;
			  验证结果：true false
			  验证：要求从头到尾完全匹配；
			  问题：test默认只要部分匹配即可；
			  解决：都要在正则前加^，后加$;
				^$,完整匹配；

			例：
			密码强度要求：6-8位，只能是数字，字母组合；至少包含一位大写字母，至少包含一个数字；
			预判：
				1.不全由小写字母或数字组成；
				  可能包含大写或符号
				  (?![a-z0-9]*$)

				2.不全由小写字母或大写字母组成；
				  可能包含数字或符号
				  (?![a-zA-Z]*$)

			正则规则：只能是字母数字的组合，-->屏蔽符号；
				  [a-zA-Z0-9]{6}

			完整：(?![a-z0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6};

			2.查找：
				var arr=reg.exec(str);在str中查找符合reg规定的关键字；要加g; 没找到(或找到最后没有了)返回null;
				 reg.lastIndex:下次查找开始的位置；默认是0；自动更新：lastIndex=index+kword.length;
				var arr=reg.exec(str);
				    ["关键字内容"]-->arr[0] 数组永远只有一个元素，后一个找到的替换前一个找到的元素，arr.index也会更新；
				          arr.index
					  当前关键字位置
				今后，即查找关键字，又返回位置，就用，var arr=reg.exec(str)

			总结：查找关键字：
				1.var i=str.search(reg)
					判断有没有
					缺点：不能知道开始位置；
				2.var arr=str.match(reg)
					获得所有关键字的内容，个数；
					缺点：不能返回位置；
				3.var i=str.indexOf("kword",starti)
					从指定位置开始，查找下一个关键字
					缺点：不支持正则
				4.var arr=reg.exec(str);
					依次即获得每一个关键字内容，又获得位置

			例：
			找网页里所有a的href的值；

			正则：贪婪模式与懒惰模式；
			贪婪模式：默认总是匹配最长的符合条件的字符串；
				原因：.*  .+
			懒惰模式：仅匹配最短的符合条件的字符串；

			贪婪模式转懒惰模式：.*?  .+?

			从正则表达式匹配结果中获取字内容：
				1.在正则表达式中，用（）包括要获取的子内容的部分；
				2.程序中，在本次查找后,用：RegExp.$n 取子内容；
				  RegExp.$n --> 取“本次”匹配内容中的第n个()的内容；n从1开始；
				


2.string中支持正则的API：4个
	2个查找：
		- search
		- match

	1个替换：
		- replace
		str.replace(reg,"");
		固定套路：
		利用replace格式化数据；“替换值”中，也可以使用$n,用法与RegExp.$n相同；
	
	1个分割：
	- split

	今后只要排序，都先转换成“数组”；soft();




3.Math
	专门执行数学计算的对象；
	封装了数学计算中常用的常量；
	属性：Math.PI
	1.取整：3种：
		- 向上取整：
			Math.ceil(n)

		- 向下取整：
			Math.floor(n)

		- 四舍五入取整：
			Math.round(n)

			Math.round(n) VS n.toFixed(i)
			n.toFixed(i):	Number类型  按任意小数四舍五入； 返回值是：字符串 i:0-20;
			Math.round(n)	Math对象	    只能取整		返回值是：数字

			例：写一个方法，既能返回值是：数字，又能按任意小数四舍五入；

	2.乘方/开方：
		乘方：Math.pow(n,m)   计算n的m次方
		开方：Math.sqrt(n)	计算n的平方根

	3.获取最大值/最小值：
		Math.max(a,b,c...)
		Math.min(a,b,c...)

		固定套路：变相实现获取数组中最大值；
		Math.max.apply(Math,arr);-->Math.max(arr[0],arr[1],arr[2]...)
	
	4.随机数：
		Math.random();0<=n<1
		任意min 到max之间取一个随机整数
		parseInt(Math.random()*(max-min+1)+min);
		


4.Date
	封装了一个时间点，提供了对时间和日期的操作API；
	Date中封装了 从1970年1月1日0点0分0秒至今的毫秒数；便于计算；

	创建Date对象：4种；
	1.var now=new Date();创建一个新日期对象同时保存了*客户端*当前时间点的毫秒数；--当前时间  
	2.自定义时间对象；
		var time=new Date("2012/11/22 [18:35:00]");
	3.var time=new Date(年，月-1，日[，时，分，秒])

	date.getTime():获得日期对象中的毫秒数；

	Date API:
	javascript-->左侧js对象
		  -->js日期
		  -->中间找：javascript Date对象参考手册
	1.每个分量都有一对儿 get / set方法；
	2.方法的命名：年月日星期 都不带s
		     时分秒毫秒  都以s结尾；

		     如：
		     设置小时：setHours()
		     设置月份：getMonth()

		     特殊：
		     年：get/setFullYear() -->使用4位完整年份；
		     星期：getDay():获得星期的序号；
		           日 一...六
			   0  1    6
			   星期没有set方法；
			月中的日：get/setDate();
	3.返回值：
		月中的日：1-31；
		其它分量都是从0开始到-1结束；
		月份：比正常减1；

		日期如何计算：2种；
		1.两日期对象直接相减，结果是毫秒差！
		2.对任意分量做加减：
		  先用get取出来
		  做计算
		  再用set放回去；
		3.set(get()+计算);

	4.日期转字符串输出：
		1.date.tolocaleString();
		2.date.tolocaleDateString();
		2.date.tolocaleTimeString();
	
		



















