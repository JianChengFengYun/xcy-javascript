﻿
回顾：
	闭包：

	闭包3特点：
	1.嵌套函数；
	2.内存函数操作了外层函数的局部变量；
	3.外层函数将内存函数返回到外部；
	  被全局变量保存住；

	判断闭包执行结果：
	1.外层函数被调用几次，就有几个受保护的局部变量副本；**************
	2.来自一个闭包的函数被调用几次，受保护的局部变量就变化几次；

1.面向对象：
	在程序中，都是用一个对象来描述现实中的一个具体的东西；
	属性：描述一个东西的特点的变量；
	功能：东西可以执行的操作；

	对象：封装多个数据和方法的存储空间；
	自定义对象：封装现实中的一个东西的属性和功能的存储空间；

	2.如何创建自定义对象；
		1.var obj={
			   "属性名1":值1,
			   "属性名2":值2,
			   "功能名1":function(){}
			}；
			属性名和方法名可以不加引号

		js中一切都是对象，所有关联的底层都是“哈希数组”；*****************************
		
		属性：
		如何访问属性：2种；
		obj.属性名  obj[“属性名”]
		. --> [""]
		访问对象不存在的属性（访问数组不存在的下标）：undefined;
		如果强行给不存在的属性赋值，js会自动创建一个同名属性；

		如何判断一个对象中是否包含某个成员：3种；				*************
		1.obj.hasOwnProperty("属性名")； 有返回true，没有false；  如：arr.hasOwnProperty("indexOf");
		2."属性名" in 对象；					如："indexOf" in arr;
		2.obj.属性名						如：arr.indexOf;
			arr.indexOf!==undefined      
			如果不包含,返回undefind-->false
			如果包含,返回值或function-->true
			何时省略：判断方法是否存在时，可省略!==
			  如果确定属性值一定不是null,0,"",NaN
			  也可省略



		方法：如何在方法中访问当前对象自己：
		this：运行时，正在调用方法的对象；			******************
		this：window下唯一的指针，指向当前正在调用方法的对象；

		在方法内访问当前自己的属性：this.属性名;不能省this.;省掉后找的是作用域链对象；
		this和定义在哪无关，仅和调用时当前的对象有关；
		所有无主的调用或赋值，默认的this都是window；

2.面向对象：继承；
	面向对象3特点：封装，继承，多态；
	封装：将描述同一个东西的属性和方法，定义在一个对象里；
	继承：父对象的属性和方法，子对象可以直接使用；
	多态：同一对象，在不同情况下，呈现不同的状态；
		重载：同一方法名，传入参数不同，执行不同操作；
		重写：子对象觉得父对象的成员不好用，可以自己定义一个，覆盖父对象的成员；

	- 封装: 如何创建自定义对象；
		1.var obj={
			   "属性名1":值1,
			   "属性名2":值2,
			   "功能名1":function(){...this.属性名...}
			}；

		2.var obj=new Object()；
		  obj.属性名=值1;
		  obj.方法名=function(){...this.属性名...};

		3.利用构造函数 反复 创建 "相同结构" 的对象；
			构造函数:描述一类对象结构的特殊函数；
			2步：
			1.定义构造函数：
				function 构造函数名|类型名（属性参数1，...）{    //构造函数名|类型名:首字母大写；
					this.属性名=属性参数1;                  //当前对象 创建一个值为属性参数1 的属性；
					this.方法名=function(){};
				}

			2.利用构造函数创建对象：
				var obj=new 构造函数名|类型名（属性参数1，...）
				new:
				1.创建一个空对象；new obj={};
				2.利用空对象调用构造函数；
				  构造函数在空对象中添加属性和方法；
				3.设置新对象的__proto__属性指向构造函数的原型对象；**********
				4.返回新对象的地址；

	- 继承:js中一切继承都是用原型对象实现的；
		原型对象：每个函数对象都有一个原型对象；
		构造函数的原型对象负责保存所有子对象共享(公用)的成员；

		所有子对象共享的方法，都应定义在构造函数的原型对象中。--避免重复定义方法和对象，浪费内存；

		var arr=new Array();
		Array.prototype.
		arr.__proto__.在F12中可以查看API；

		说明：所有内置类型的API都定义在类型.prototype；

		扩展对象属性：2种；
			1.扩展共有属性；通过构造函数.prototype添加的属性；
			2.扩展自有属性；通过某一个具体的子对象添加的属性；

		判断自有属性或共有属性；
			1.判断自有属性：obj.hasOwnProperty("属性名");
			2.判断共有属性:"属性名" in obj && !obj.hasOwnProperty("属性名");in的范围：原型与自己的属性；

		删除属性：delete 对象.属性名；只能删除当前对象自己的属性，无法删除共有的属性；

		全局变量：var n=1;      |         window.n=1;         |    window["n"]=1;
		         window.n不能delete	  window.n不能delete	   window.n能delete

		***原型链：由各级对象的__proto__逐级继承形成的关系；
		获得任意对象的父级原型对象：
			Object.getPrototypeOf(子对象);
			==>子对象.__proto__;
			
			var arr=[];
			Object.getPrototypeOf(arr);
			[]

			var arr=[];
			Object.getPrototypeOf(arr)==Array.prototype;
			true

			var arr=[];
			Object.getPrototypeOf(Object.getPrototypeOf(arr));
			Object {}

			var arr=[];
			Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)));
			null

		判断是不是数组：
		Array.isArray([])；true
		Array.isArray({})；false IE8不支持，在构造函数里；

		检查对象的原型：
		父对象.isPrototypeOf(子对象);
		判断一个prototype对象是否存在另一个对象的原型链中；










