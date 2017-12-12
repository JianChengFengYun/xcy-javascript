var adv={
	div:null,
	step:5, //每步长5px
	interval:10, //步频
	init:function(){
		this.div=document.querySelector("#msg");
		this.moveUpStep();
	},
	moveUpStep:function(){//移动一步
		//问题：style只能获得内联样式
	/***如何获得应用在当前元素上的所有样式属性？***/
		//DOM: var style=getComputedStyle(elem);
		//IE8: var style=elem.currentStyle;
		var divStyle=getComputedStyle(this.div);
		//问题：divStyle只读，不能设置
		//解决：直接在内联style中设置样式覆盖样式表的
//总结：只要读样式，用getComputedStyle(elem)
     //只要设置样式，用elem.style.属性=
		this.div.style.bottom=
			parseInt(divStyle.bottom)+this.step+"px";
		if(parseInt(this.div.style.bottom)<0){
			setTimeout(function(){
				adv.moveUpStep();
			},this.interval);
		}
	},
	moveDownStep:function(){
		// 获得当期div的bottom属性值；
		var divStyle=getComputedStyle(this.div);
		var bottom=parseInt(divStyle.bottom)-this.step;
		var height=parseInt(divStyle.height);
		this.div.style.bottom=bottom+"px";
		if(bottom>-height){
			setTimeout(function(){
				adv.moveDownStep();
			},this.interval);
		}else{
			setTimeout(function(){
				adv.moveUpStep();
			},2000);
			
		};
	}
}
window.onload=function(){
	adv.init();
}