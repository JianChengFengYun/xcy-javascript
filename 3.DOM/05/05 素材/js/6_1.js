function randomPos(x,y){
	//让div随机出现在outer内的随机位置
	var outer=document.querySelector("#outer");
	//计算div最大的横坐标、纵坐标
	var outerStyle=getComputedStyle(outer);
	var maxTop=parseInt(outerStyle.height)-50;
		     //文档显示区的高
	var maxLeft=parseInt(outerStyle.width)-50;

	do{
		//随机计算div的横坐标、纵坐标
		var rTop=parseInt(Math.random()*(maxTop+1));
		var rLeft=parseInt(Math.random()*(maxLeft+1));
		if(arguments.length!=0){
			//判断rTop和rLeft是否包含传入的x,y
			if(!((x>=rLeft&&x<=rLeft+50)
				  &&
				 (y>=rTop&&y<=rTop+50))){
				break;
			}
		}
	}while(arguments.length!=0);
	
	
	
	
	
	var div=document.querySelector("#outer div");
	div.style.top=rTop+"px";
	div.style.left=rLeft+"px";
}
window.onload=function(){
	randomPos();
document.querySelector("#outer div").onmouseover=function(){
	//this-->div
	//调用randomPos()，传入鼠标当前的x,y坐标
	var e=window.event||arguments[0];
	var x=e.offsetX;
	var y=e.offsetY;
	randomPos(x,y);
}
}