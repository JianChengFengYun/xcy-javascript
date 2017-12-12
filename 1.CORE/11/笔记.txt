
回顾：
	面向对象3特点：封装，继承，多态；
	封装：将描述同一个东西的属性和方法，定义在一个对象里；
	继承：父对象的属性和方法，子对象可以直接使用；
	多态：同一对象，在不同情况下，呈现不同的状态；
		重载：同一方法名，传入参数不同，执行不同操作；
		重写：子对象觉得父对象的成员不好用，可以自己定义一个，覆盖父对象的成员；

	- 封装: 如何创建自定义对象；
		1. 直接量：__proto__指向Object.prototype
			var obj={
			   "属性名1":值1,
			   "属性名2":值2,
			   "功能名1":function(){...this.属性名...}
			}；

		2.new关键字：
			var obj=new Object()；
			 obj.属性名=值1;
			 obj.方法名=function(){...this.属性名...};

		3.利用构造函数 反复 创建 "相同结构" 的对象；
			构造函数:描述一类对象结构的特殊函数；
			2步：
			1.定义构造函数：
				function 构造函数名|类型名（属性参数1，...）{    //构造函数名|类型名:首字母大写；
					this.属性名=属性参数1;                  //当前对象 创建一个值为“属性参数1” 的属性；
					if(!构造函数.prototype.方法名){
						构造函数.prototype.方法名=function(){};
					}
				}

			2.利用构造函数创建对象：
				var obj=new 构造函数名|类型名（属性参数1，...）
				new:
				1.创建一个空对象；new obj={};
				2.利用空对象调用构造函数；
				  构造函数在空对象中添加属性和方法；
				3.设置新对象的__proto__属性指向构造函数的原型对象；**********
				4.返回新对象的地址；

		4.Object.create(父对象，{扩展属性的列表对象})

	this: 仅和调用时使用的对象有关！ 
		所有无主的（不用var 赋值的变量，匿名函数）都是window的；

	- 原型，原型链，继承：
		原型：保存所有子对象的属性和方法；
		      所有函数都有prototype，指向自己的原型对象；
		      所有对象都有__proto__,指向自己父级原型对象；
		      所有原型对象都有constructor，指向原型对应的构造函数；

		原型链：所有父子级对象间由__proto__形成的多级引用关系；
			多级 继承；

		原型相关API：
			1.判断自有属性和共有属性：
				  1.判断自有属性：obj.hasOwnPrototype("属性名");
				  2.判断原型链上的属性：2种；
					判断不包含：
						if(!("属性名"in obj))
						if(obj."属性名"===undefined)
						if(!obj."属性名")
				  3.判断共有：两个条件；
				  （!obj.hasOwnPrototype("属性名")）&&("属性名"in obj);

	- 获得任意对象的父级原型对象：
		Object.getPrototypeOf(子对象);
		==>子对象.__proto__;

	- 检查对象的原型：
		父对象.isPrototypeOf(子对象);
		判断一个prototype对象是否存在另一个对象的原型链中；

	- 判断是不是数组：
		Array.isArray([])；true
		Array.isArray({})；false IE8不支持，在构造函数里；
		1. 如果Array.prototype在obj的原型链中
			return Array.prototype.isPrototypeOf(obj);
		2. instanceof: 
			语法：obj instanceof 构造函数名
			判断obj对象是否被构造函数创建
			return obj instanceof Array;
			实例：一个构造函数创建出的每个具体对象
		3. 原型对象的constructor属性			***仅判断直接父级
			return obj.constructor==Array;
		4. 利用当前对象，强行调用Object原型的toString方法
		Object.prototype.toString.call(obj);==>执行的一瞬间相当于：obj.toString();
						    ==[object Array]
		/*call,apply
			call,在调用方法的一瞬间更换调用方法的对象*/

1.继承：
	why：代码重用；节省空间；
	1.直接继承对象：想方设法修改对象的__proto__;3种；
		1.仅“修改”一个对象的__proto__；
			Object.setPrototypeOf(子对象,父对象);
		2.通过修改构造函数的原型对象，实现批量修改后续子对象的继承关系。
			构造函数.prototype=父对象；（影响出现的位置 后面的对象）
			**仅影响之后创建的对象的继承关系；
			  之前创建的对象依然继承旧构造函数的原型对象；
		  重写：hmm.toString=function(){};
		  扩展：hmm.sing=functon(){};
		3.Object.create(父对象[，{扩展属性的列表对象}])
			- 创建空对象
			- 继承新的父对象中的属性
			- 重写 扩展
			

	2.仅继承结构：
		function 父类型构造函数（属性参数1，属性参数2）{
			this.属性1=属性参数1;
			this.属性2=属性参数2;
		}
		function 子类型构造函数（属性参数1，属性参数2，属性参数3）{
			父类型构造函数.call(this,属性参数1，属性参数2);
			//父类型构造函数.apply(this,[属性参数1，属性参数2]);//参数是数组；
			this.属性3=属性参数3;
		}
		var obj=new 子类型构造函数（值1，值2，值3）;


