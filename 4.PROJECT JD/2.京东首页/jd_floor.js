//获得任意元素距页面顶部的距离：
HTMLElement.prototype.getElementTop=function(element){
	//this-->正在调用方法的元素
	var height=this.offsetTop;//获得当前元素距绝对定位的父元素顶部距离；
	var parent=this.offsetParent;//获得当前元素的绝对定位父元素；
	while(parent!=null){
		height+=parent.offsetTop;
		parent=parent.offsetParent;
	};
	return height;
};
window.onload=function(){
adv.init();
//console.log($("#f1 span")[0].getElementTop());
//console.log($("#f2 span")[0].getElementTop());
//console.log($("#f3 span")[0].getElementTop());
}
window.onscroll=function(){//当用户滚动页面时
	 var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
	 //console.log(scrollHeight);
	 for(var i=1;i<=3;i++){
		var totalHeight=$("#f"+i+" span")[0].getElementTop();
		if(totalHeight<scrollHeight+parseFloat(window.innerHeight)-200 && totalHeight>scrollHeight+100){
			$("#f"+i+" span")[0].className="hover";
		}else{
			$("#f"+i+" span")[0].className="";
		};
	 }
	 var f1Top=$("#f1 span")[0].getElementTop();
	 var footerTop=$("#foot_box")[0].getElementTop();
}
//元素是否进入显示区：totalHeight<scrollHeight+innerHeight;
//元素是否滚出显示区：totalHeight<scrollHeight;