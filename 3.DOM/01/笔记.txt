【DOM概述】
DHTML
	动态网页技术的统称
       DHTML=HTML+CSS+JS
鄙视题：
	HTML XHTML DHTML XML：
	HTML： 超文本标记语言，专门编写网页内容的语言
	XHTML：严格的HTML语言标准
	DHTML：动态网页技术的统称，=HTML+CSS+JS
	XML：  可扩展的标记语言，可自定义标签
XML
	专门用来存储/传输自描述的结构化数据，逐渐被json替代了
	<演员>   
	<姓名>范冰冰</姓名>
	<数学>91</数学>
	<语文>65</语文>
	<英语>95</英语>
	</演员>
	"{"姓名":"范冰冰","数学":91,...}"——json
BOM VS DOM
	BOM：浏览器对象模型(API),专门操作浏览器窗口的API
	没标准！
	DOM：文档对象模型(API),专门操作网页内容的API
	可以对网页中任意对象，做任何修改！
	DOM是标准，90%以上浏览器都严格兼容
DOM
	核心DOM：操作所有结构化文档(XML,HTML)的通用API
	HTML DOM：针对HTML文档的简化API，HTML DOM不能完成所有功能，实际开发中都是核心DOM与HTML DOM配合使用。
	HTML DOM：网页中一切都是对象(元素，属性，文字)，同一网页中的所有对象，在内存中父子相连，形成一棵DOM树。

【***DOM树：】
文档中的每个元素，属性，文字，注释，都被看做一个节点对象——Node——所有节点对象的父类型
当网页被加载进内存时，浏览器会为网页创建一个document对象。所有节点对象都是document对象的子节点。
document，封装了对网页中所有子节点的增加，删除，查找

Node类型定义了3个公共属性：
	nodeType: 节点的类型的数值
		何时使用：专门用于判断获得的节点类型
		如果是元素节点，返回1
		如果是文本节点，返回3
	nodeName: 节点的名称
		何时使用：专门用于判断获得的标签名
		如果是元素节点，返回标签名
		**强调：nodeName返回的都是全大写标签名
		如果是文本节点，返回#text
	nodeValue: 节点的值：
		元素节点，返回null
		文本节点，返回文本的内容

childNodes: 获得当前节点对象下的所有子节点
	    类数组对象，[i]    .length
	    ***动态集合***：自己不保存任何实际数据，每使用一次都在DOM树重新查找一遍；

DOM树6种关系：6个属性：
	父子：4个：parentNode childNodes firstChild lastChild
	兄弟：2个：previousSibling  nextSibling

【遍历】
从指定书元素开始，按照深度优先的原则，遍历所有各级子节点；
2步：
	1.定义一个函数：查找任意父节点下的所有直接子节点；
	2.以深度优先为原则，递归调用函数本身；

	使用：
	1.遍历不确定层级深度属性结构时；网盘；网页中的元素;
	2.不确定层级深度的多级管理结构；

	何时使用递归调用：2个场景：
	1. 遍历*不确定层级深度*的树形结构时：
	比如：网页中的元素，网盘的文件夹结构
	2. *不确定层级深度*的多级管理结构：

元素树：仅由元素节点组成的树结构,其实有一组和节点树6个属性对应的元素树属性
			  节点树      元素树
	       父对象   parentNode   parentElementNode
	   所有子对象   childNodes   children
	 第一个子对象   firstChild   firstElementChild
	   最后子对象   lastChild    lastElementChild

	前一个兄弟   previousSibling previousElementSibling
	后一个兄弟      nextSibling  nextElementSibling

	何时使用：只要仅希望遍历元素节点时，就用元素树
	问题：IE8不兼容，children可用

DOM Level2 遍历API：2个——选学
	1. 深度优先遍历：NodeIterator
	节点迭代器
	如何使用：2步：
		1. 创建遍历API对象：
			var iterator=document.createNodeIterator(
				开始的父节点对象,
				whatToShow,
				null,false
			);
			whatToShow: NodeFilter.SHOW_ELEMENT
			NodeFilter.SHOW_ALL
		2. 用while循环，反复调用iterator.nextNode()方法
			强调：1. 只要nextNode()，就向下一个移动一次
			      2. iterator.previousNode()，后退一次
			***作业：为NodeIterator遍历结果，添加缩进

	2. 自有遍历：TreeWalker：
	使用几乎相同，只不过TreeWalker比Iterator多个别方法

总结：4种：节点树 元素树 
API（NodeIterator，TreeWalker）


【查找】
*查找：5个API：
	1. 按id查找：
		var elem=document.getElementById("id值");
	2. 按标签名查找：（向下爬树的主要手段）
		var elems=parent.getElementsByTagName("标签名");
		***elems也是动态集合***
		*不仅查直接子节点，同时可获得间接子节点*
	3. 按name属性查找：（专门用于查找表单中的元素）
		var elems=parent.getElementsByName("name属性值");
		***elems也是动态集合***

	4. Selector API：jQuery的核心
	var elem=parent.querySelector("选择器");
	var elems=parent.querySelectorAll("选择器");
	2特点：1. 内置API：执行效率高
	       2. elems：包含完整对象属性的集合
			 不会反复查找！

