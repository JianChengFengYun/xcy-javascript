var game={
	smallW:null,
	start:function(){
		//打开新窗口并设置窗口的大小；随机初始化窗口的位置；
		//随机生成窗口左上角top值：0到 screen.availHeight-50;
		//随机生成窗口左上角left值：0到
		//open("url","name","config");
		//config:"top=,left=,height=,width=,resizable=yes";
		var maxTop=screen.availHeight-30-50;
		var rTop=parseInt(Math.random()*(maxTop+1));
		var maxLeft=screen.availWidth-50;
		var rLeft=parseInt(Math.random()*(maxLeft+1));
		var config="top="+rTop+",left="+rLeft+",width=50,height=50,resizable=yes";
		//打开新窗口，并返回窗口对象，存在smallW；
		this.smallW=open("about:blank","small",config);
		this.smallW.document.write("<img style='height:80px;' src='xiaoxin.gif' />")

		this.smallW.onmouseover=function(){//鼠标移上小窗口让小窗口走；
			var e=window.event||arguments[0];
			var X=e.screenX;
			var Y=e.screenY;
			while(true){
				var rTop=parseInt(Math.random()*(maxTop+1));
				var rLeft=parseInt(Math.random()*(maxLeft+1));
				if(!((X>=rLeft&&X<=rLeft+50)&&(Y>=rTop&&Y<=rTop+50))){
					this.moveTo(rLeft,rTop);
					break;
				}
			};
		}
	}


}