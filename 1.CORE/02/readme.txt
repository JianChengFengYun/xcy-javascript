
程序的变量   vs   数据库
 内存中           硬盘上的文件
 临时的数据       持久存贮的数据
 客户端           服务器只存一份

1.数据类型转换；
	js是弱类型语言：体现在3方面；
		- 申明变量时，不用规定变量存贮的数据类型；
		- 赋值时，动态决定变量的数据类型；
		  同一变量，先后可保存不同类型的数据；
		- 运算时，js会根据需要，动态转换变量的数据类型；

	js的数据类型转换：2大类；
		1.隐式转换：无需程序员干预，js自动完成类型的转换；

			- “+”运算中的隐式转换：			*****************************

			********“算数计算中”：一切类型都隐式转为Number类型，再计算；如：true、flase-->1、0；
				         特殊：在“+”运算中，只要"有一方是字符串"，俩数据都转为字符串，字符串连接；

				 表达式：由数据，变量和运算符组成的一个公式；
				        每个表达式默认都是从左向右，两两运算；
					每个表达式有且仅有一个运算结果（值）；

				 NaN:not a number-->说明运算中包含了无法转为数字的值；
				    不是数字 的 数字（数据类型是number类型）
				    NaN和任何数据计算：永远返回NaN；

				 typeof(x):判断数据类型；返回数据类型名；
					typeof(NaN):number;

			- 隐式转换;仅影响表达式运算结果，不影响变量中贮存的实际值；

		2.强制转换：程序员通过“主动”调用专门函数，执行转换；

			- 任意类型"转string类型"：2种；
				1.var str=x.toString();
				  js中，一切数据都有toString()方法；

				2.var str=String(x);-->隐式转换的原型；
			
			- 任意类型"转Number类型"：
				1.var n=Number(x);-->隐式转换的原型；
				  Number():只能将“纯数字字符串”转为数字；
				  Number(""):将“空字符串”转为数字0；


				2.string类型 转 Number类型：2种；
				  - var n=parseInt(str);   
				    *********** str 应该是字符串，如果不是，会发生隐式转换为“字符串”；**********
				    原理：从str开始位置逐个读取每个字符；
				          直到碰到第一个不是数字的字符，停止读取；自动忽略开头碰到的空格；
					  如：
						parseInt("$400"); NaN
						parseInt("34.56"); 34

				  - var n=parseFloat(str);
				    原理和parseInt一致，但是parseFloat认第一个小数点；
					  如：
						parseFloat("$400"); NaN
						parseFloat("34.56"); 34.56
						parseFloat("34.56.78"); 34.56

				  Number(x) VS parseInt(str)；***********************************
				    字符串“转数字”时用parseInt(str)；
				    非字符串“转数字”时用Number(x)；

			- 任意类型"转boolean类型"；1种；
				  var bool=Boolean(x);
				  只有5个值会转为false；
					- 空字符串
					- NaN
					- undefined
					- null
					- 0

************凡是从页面上获取的一切数据，都是字符串；


输入框：var input=window.prompt("请输入薪资：");//得到的是文本框里面的内容；window.可省略；

	(demo2)
	练习：
		请用户输入薪资，保存在变量salary中；
		将salary薪资+1000；
		输出涨薪后的工资；
	解答：
		var salary=parseFloat(window.prompt("请输入薪资："));
		salary+=1000;
		document.write("涨薪后的工资:"+salary+"元");


2.运算符和表达式；

	程序：让计算机按照人的想法去执行任务；思想；

	运算符：程序中模拟人的思维运算或判断的“符号”；
		- 算数运算符：
			+ - * /；
			%：
				模；取余数；
				when：判断奇数和偶数；
					确保一个运算的结果，不超过某个最大值(除数)；
			++：
				将当前变量中的值递增1；
				when：只要对变量中的值递增1，还存回变量中；
				3种情况：
				    -- ++如果单独使用，n++和++n都一样；“结果都递增1；”***************
				    -- ++参与到表达式：
					前++(++n):将n的值+1，然后返回"新值"；
					后++(n++):将n的值+1，然后返回"旧值"；

					(demo3)
					var n=5;
					console.log(n++);//5
					console.log(n);  //6

					var n=5;
					console.log(n);  //5
					console.log(n++);//5

					var n=5;
					console.log(n);  //5
					console.log(++n);//6

					var n=5;
					n++;             //6

					var n=2;
					/*
					var r=n++ + ++n + n++;
					 返回:2     :4     :4
					     n=3    n=4   n=5
					document.write(r+"<br />");// 10
					document.write(n+"<br />");// 5
					*/

					var m=++n + n++ + ++n;
					 //返回:3     :3     :5
					//     n=3    n=4   n=5
					document.write(m+"<br />");// 11
					document.write(n+"<br />");// 5

			--：将当前变量中的值递减1；

		- 关系运算：比较数据之间的大小关系；
			<  >  <=  >=  ==  !=
			只能返回两个值：true / false;
			隐式转换：
				(demo4)
				*****“关系运算中”：将所有类型都转为Number类型，再比较！
				       特殊：3种；
				            -- 两个字符串作比较：一次PK每一位字符的"unicode编号"；
								只要有一位字符，分出大小，就不在比较；
					       例："3">"10"         //true  3的"unicode编号">1的"unicode编号"
						   "smith">"scott"  //true  m的"unicode编号">c的"unicode编号"

							var wu="向";
							wu.charCodeAt();
							21521
							var wu="吴";
							wu.charCodeAt();
							21556
						
					   -- NaN :NaN和任何数据作大小或等于比较，永远返回false;
						   NaN和任何数据不等于比较，永远返回true;
					      isNaN(num);判断num是不是NaN;
					              是NaN返回true，不是NaN返回false；
						      when：今后只要判断一个数值是不是数字或能否被转为数字；是数字返回false；不是数字返回true；
					      ****** !isNaN(num) ：是数字返回true；不是数字返回false；
						    "!":非；
						    如：
						    isNaN（""）   //false;
						    isNaN("true") //true;
						    isNaN(true)   //false;

					  -- undefined VS null
					     undefined == null    //true
					     Number(undefined)    //NaN
					     Number(null)         //0

					     ===:首先数据类型相同；其次值相同；
					         不带隐式转换；
					         when:只要不希望关系运算中自动隐式转换时，就用===;

		- 逻辑运算：综合多个关系运算的结果最终得出结论；
			   隐式转换：转为布尔值进行比较；
			   返回值：true / false;
			   -- &&:且
				 ***********
				 短路逻辑：如果前一个条件已经可以的出结论，则后续条件不在执行；
				 (demo5);
				 利用&&的短路逻辑：false；
				  关系运算&&的操作：只有满足前一个条件，才执行后一个操作；

					例子：demo5
					// 用户的 总价 超过500 打8折；
					// 利用&&短路逻辑
					var total=parseFloat(prompt("输入总价："));
					total>=500&&(total=total*0.8);
					document.write(total);


			   -- ||：或
				***********
				 利用||的短路逻辑：true
				  关系运算||的操作：如果前一个条件不满足，才执行后一个操作；


			   -- !：非


			例子：
			console.log(5&&4) //4
			console.log(4&&5) //5
			console.log(5||4) //5
			console.log(4||5) //4


		- 位运算
			左移<<：n<<m n的二进制左移m位，n*2的m次方；乘
			        1<<3  //8
			右移>>：n>>m n的二进制右移m位，n/2的m次方；除
				64>>4 //4

		- 扩展赋值运算 ：作计算，赋值；
			+=  n+=2-->n=n+2,将n的值加2后，再保存n中；累加；
			-=
			*=
			/=
			%=

		- 三目（元：参与运算的数值个数）运算：根据不同的条件，多选“一”，返回不同的结果；
			条件1 ? 值1 :
			条件2 ? 值2 :
			条件3 ? 值3 :
			      默认值；

