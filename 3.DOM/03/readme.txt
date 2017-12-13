【创建和删除节点】
1.如何创建节点：（创建元素节点）3步：
	1.先创建空元素对象：
	  var newElem=document.createElement("标签名");
	2.设置必要属性：
	  newElem.属性名="值";
	  newElem.innerHTML="文本";
	3.将新元素对象挂载到指定父元素下：
	  - 追加：parent.appendChild(newElem); ***只有向已经存在页面中的元素追加新节点才会渲染；
	  - 插入：parent.insertBefore(新,firstChild);
2.创建文档片段：	documentfragment;
	文档片段：内存中，临时存贮多个子节点的空间；
	使用：反复追加多个平级元素；
	解决：将所有平级元素追加到文档片段中，将文档片段一次性追加到父元素下；文档片段不参与追加；
	var fragment=document.createDocumentFragment();
3.删除节点：
	- parent.removeChild(oldElem);-->oldElem.parentNode.removeChild(oldElem);
4.替换节点：
	- parent.replaceChild(new,old);

onchange：当内容发生改变时触发；
select对象：selectedIndex;选项的下标；

【HTML DOM常用对象】
1.table
	- 属性：
	  tHead tFoot tBodis
	  rows:获得表中所有行对象；
	  rows[i]-->某一行；
	  rowIndex:当前行下标的位置，用于删除行；

	  TableRow对象：代表table对象中的某一个tr对象；
	  table.rows集合，就是一组TableRow对象的集合；

	  cells：当前行中所有td对象；
	  cells[i]：
	  cellIndex:

	- 方法：
	  tbody.insertRow(rowIndex):rowIndex写-1；在末尾追加；没有给创建文档片段的机会；*** 创建和挂载
	  deleteRow(rowIndex);
	  tr.inserCell(index);--》只能创建td*** 创建和挂载
	  deleteCell(rowIndex);

2.select对象
	- options:select下所有的option；
	  options[i];
	  selectedIndex:获得当前选中的option的下标；

	- option对象：
	  var newopt=new Option(innerHTML,value);创建对象，同时设置innerHTML和value；**********

	- select.add(新option) 只挂载;  select.add(new Option(innerHTML,value))**********
	  remove(index);
	  index:获取获得当前的option的下标，用于删除
	  selected:
		
3.form对象
	- 找到form对象
	  var form=document.forms[i/name];
	  var element=form.elements[i/name];

	  事件：onsubmit:在正式提交表单前自动触发；
【案例】
1. 动态创建表格；
2. 二级联动列表；
3. 动态操作表格 删除功能；
4. 联动菜单；