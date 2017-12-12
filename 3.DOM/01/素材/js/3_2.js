//输出指定元素及其 直接 子元素；

var blanks=[];	//保存现在加在元素前的缩进\t的个数；
function getChildren(parent){
					/*如果parent是元素节点，就返回nodeName，否则，返回nodeValue*/
	console.log(
			blanks.join("")+"|-"+(parent.nodeType!=3?parent.nodeName:parent.nodeValue)
		);
				//如果parent有子节点（childNodes>0;）
				//遍历parent的所有直接子节点；
				//按当前子节点类型输出子节点的name或value；
	if(parent.childNodes.length>0){
		blanks.push("\t");
		for(var i=0,len=parent.childNodes.length;i<len;i++){
				/*var child=parent.childNodes[i];
				console.log(child.nodeType==1?child.nodeName:child.nodeValue);*/
			arguments.callee(parent.childNodes[i]);
		}
		blanks.pop();
	}
}
window.onload=function(){
	//getChildren(document.body.childNodes[3]);
								//ul
	getChildren(document);
}
