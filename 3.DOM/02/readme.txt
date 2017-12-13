【修改元素的内容和属性】
1.元素的内容
	- innerHTML:获取 / 设置 元素开始标签和结束标签里的html内容；
		使用固定套路：
		1.删除父元素下所有子元素：parent.innerHTML="";
		1.替换父元素下所有子元素：parent.innerHTML="内容";

	- innerText/textContent; 获取开始标签和结束标签里的文本内容；不包含元素；
	  IE8          DOM标准
	- nodeValue：文本节点的内容；

	//***splice返回的是数组，加下标取值；遍历过程中会影响下标，从后向前遍历；

2.元素属性
	所有元素都有attributes属性[i]访问；
	- 读取属性：
	  var value=element.getAttribute("属性名");获得任意属性的值；
	- 修改属性：
	  element.setAttribute(name,value);
	  IE8不支持：用element.attributes("属性名")=value;
	- 删除属性：
	  element.removeAttribute("属性名");
	- 判断有没有包含属性：
	  element.hasAttribute("属性名");->true / false;

	property VS Attribute
	属性         HTML特性
	property：对象在内存中存储的属性，用.访问；
	Attribute：元素对象在开始标签定义的HTML属性和自定义属性；
	访问 / 设置标准属性时：二者通用；
	访问 / 设置自定义属性时：getAttribute("属性名")，setAttribute(name,value) 核心DOM

	将类数组对象转换为标准数组；lis=Array.prototype.slice.call(lis);*********

3.元素的样式
	- 修改内联样式
	  1.获取或修改内联样式：style对象
		移除：
		oldDiv.style.removeProperty("z-index");
		oldDiv.removeAttribute("style");
		oldDiv.style.zIndex="";
		设置：
		oldDiv.style.zIndex="1";

		问题：仅能操作行内样式；


	- 修该样式表中的规则：内部 外部
	  2步：
	  1.获得要修改的样式表对象：
	    var sheet=document.styleSheets[i]; styleSheets:获得网页所有样式表对象；
	  2.获得要修改的cssRule:
	  cssRule:样式表一个大括号就是一个cssRule对象；（有嵌套
	  ）
	  var cssRule=sheet.cssRules[i];
	  3.获得cssRule中的属性：
	    cssRule.style.属性名；