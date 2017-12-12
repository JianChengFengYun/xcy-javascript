/*使用遍历API，打印所有节点——节点树*/
var blanks=[];
function getChildren(parent){
	//Step1: 创建NodeIterator对象
	var iterator=document.createNodeIterator(
	//var iterator=document.createTreeWalker(
		parent,NodeFilter.SHOW_ALL,null,false
		     //NodeFilter.SHOW_ELEMENT
	);
	//Step2:使用while循环，调用iterator.nextNode()
	//      每次调用，都会返回下一个节点
	//      直到返回null为止
	var currNode=null;

	var a=true;
	while((currNode=iterator.nextNode())!=null){
		
		console.log(
			blanks.join("")+"|-"+(currNode.nodeType!=3?currNode.nodeName:
			                     currNode.nodeValue));

		if(a){
		iterator.previousNode();
		blanks.push("\t");
		iterator.nextNode();
		a=false;
		}
	

	}
}

window.onload=function(){
	getChildren(document);
	/*var walker=document.createTreeWalker(
		document.body,NodeFilter.SHOW_ELEMENT,null,false
	);
	console.log(walker.firstChild());
	console.log(walker.nextSibling());
	*/
}