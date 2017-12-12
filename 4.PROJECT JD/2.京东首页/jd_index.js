window.$=HTMLElement.prototype.$=function(selector){
	return (this==window?document:this).querySelectorAll(selector);
}

var json='[{"i":1,"img":"banner_01.jpg"},{"i":2,"img":"banner_02.jpg"},{"i":3,"img":"banner_03.jpg"},{"i":4,"img":"banner_04.jpg"},{"i":5,"img":"banner_05.jpg"}]';
var imgs=eval("("+json+")");
//console.log(imgs);

var adv={
	ulImgs:null,//轮播的ul元素；
	ulIdxs:null,//序号按钮的ul元素；

	INTERVAL:10,//每步时间间隔；
	STEP:40,	//每步移动的距离40px；
	WAIT:3000,	//等三秒一换下一张图；
	timer:null,	//定时器序号；
				//同一时刻只有一个定时器实例运行；
	curri:1,	//当前img的li序号，和序号按钮的内容；
	LIWIDTH:670,//每个图片li的宽度，
	init:function(){
		this.ulImgs=$("#imgs")[0];
		this.ulIdxs=$("#indexs")[0];
		this.initUlImgs();
		this.initUlIdxs();
		this.automove();
	},
	initUlImgs:function(){
		//初始化imgs中的广告图片，
		for(var i=0;i<imgs.length;i++){
			imgs[i]="<li data-i='"+imgs[i]["i"]+"'><img src='images/index/"+imgs[i]["img"]+"'/></li>";
		}
		this.ulImgs.innerHTML=imgs.join("");
		this.ulImgs.style.width=imgs.length*this.LIWIDTH+"px";
	},
	initUlIdxs:function(){
		//初始化按钮，
		for(var i=0,arr=[];i<imgs.length;i++){
			arr[i]=i+1;
		}
		this.ulIdxs.innerHTML="<li>"+arr.join("</li><li>")+"</li>";
		this.ulIdxs.$("li")[0].className="hover";//初始化第一个按钮；
		this.ulIdxs.onmouseover=function(){
			var e=window.event||arguments[0];
			adv.move(e);
		};
	},
	move:function(e){//响应idx li的mouseover事件
		var nextLi=e.srcElement||e.target;
		if(nextLi.nodeName=="LI"){
			var nexti=nextLi.innerHTML;//目标位置
			//找到当前hover的按钮li，移除样式
			this.ulIdxs.$(".hover")[0].className="";
			//将hover设置到curri对应的序号按钮li上
		adv.ulIdxs.$("li")[nexti-1].className="hover";
			if(nexti>this.curri){//左移
				//先停止自动轮播
				clearTimeout(this.timer);
				this.timer=null;
				this.moveStep(nexti-this.curri);
			}else if(nexti<this.curri){//右移
				clearTimeout(this.timer);
				this.timer=null;
				this.moveLi(nexti-this.curri);
				this.moveStep(nexti-this.curri);
			}
		}
	},
	automove:function(){//自动轮播广告
		this.timer=setTimeout(function(){
			//找到当前hover的li，移除样式
			adv.ulIdxs.$(".hover")[0].className="";
			adv.ulIdxs.$("li")[adv.curri==imgs.length?0:adv.curri].className="hover";
			adv.moveStep(1);//aotumove结束
		},this.WAIT);
	},
	moveStep:function(n){//每次移动一步
		//n两个作用：1. 移动几个li
		//           2. n>0,左移;n<0,右移
		var left=//获得当前ulImgs元素的left值
		parseFloat(getComputedStyle(this.ulImgs).left);
		//什么条件下，才注册下一个定时器
		if((n>0&&left>-this.LIWIDTH*n)
			||
			(n<0&&left<0)){
			//根据n的正负，让ulImgs左/右一步
			this.ulImgs.style.left=
				left-(n>0?this.STEP:-this.STEP)+"px";
			//注册定时器，反复移动下一步
			this.timer=setTimeout(function(){
				adv.moveStep(n);	
			},this.INTERVAL);
		}else{//停止移动后，注册下一次自动移动
			this.curri+=n;
			this.curri>imgs.length&&(this.curri=1);
			n>0&&this.moveLi(n);
			this.automove();
		}
	},
	//迁移左侧看不见的li到ul结尾
	//修正ul的left位置：左移修正为0
	moveLi:function(n){
		if(n>0){//左移:将左侧第一个，换到ul结尾
			//如果左侧第1个已经和curri相同，就不再换
			while(this.ulImgs.firstChild.dataset.i
				!=this.curri){
				this.ulImgs.appendChild(
	/*firstChild<--*/this.ulImgs.removeChild(
						this.ulImgs.firstChild));
			}//左移后将ulImgs的left归零
			this.ulImgs.style.left=0;
		}else{
//右移：从结尾取最后一个元素，插入到第1个元素之前
			while(this.ulImgs.$("li")[-n].dataset.i
				!=this.curri){
				this.ulImgs.insertBefore(
	/*lastChild<--*/this.ulImgs.removeChild(
						this.ulImgs.lastChild),
					this.ulImgs.firstChild);
			}//右移前，将ulImgs的left设置为n*li宽度
			this.ulImgs.style.left=n*this.LIWIDTH+"px";
		}
	}
}
//window.onload=function(){
//adv.init();
//}

//左移：先移动在迁移元素到后面；
//右移：先迁移到前面在移动；





