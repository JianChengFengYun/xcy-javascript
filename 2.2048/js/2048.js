var game={
	data:[],			//保存所有数字的二维数组；
	rn:4,				//总行数
	cn:4,				//总列数
	state:0,			//游戏状态：Running|GameOver;
	RUNNING:1,
	GAMEOVER:0,
	score:0,			//分数
	isGameOver:function(){//判断游戏是否结束
		if(!this.isFull()){
			return false;
		}else{
			for(var row=0;row<this.rn;row++){
				for(var col=0;col<this.cn;col++){
					if(col!=this.cn-1){
						if(this.data[row][col]==this.data[row][col+1]){
							return false;
						};
					}
					if(row!=this.rn-1){
						if(this.data[row][col]==this.data[row+1][col]){
							return false;
						};
					}
				};
			};
			return true;
		};

	},
	start:function(){
		//初始化二维数组；
		this.state=this.RUNNING;//游戏状态为开始
		//找到游戏结束界面，隐藏
		var div=document.getElementById("gameOver");
		div.style.display="none";
		this.data=[		
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		];
		this.scroe=0;	//游戏开始时重置分数为0；
		/*
		for(var row=0;row<this.rn;row++){
			this.data[row]=[];
			for(var col=0;col<this.cn;col++){
				this.data[row][col]=0;
			};

		};
		*/
		this.randomNum();//在随机空位置生成一个数；
		this.randomNum();
		this.upDataView();//将二维数组中每个格的数字放入前景格中
	},
	isFull:function(){
		//判断当前数组是否已满 满了返回true；

		//遍历二维数组
		//只要发现当前元素==0 return false;
		//如果循环正常退出，说明已经满了，return true;
		for(var row=0;row<this.rn;row++){
			for(var col=0;col<this.cn;col++){
				if(this.data[row][col]==0){return false;};
			};
		};
		return true;
	},
	randomNum:function(){ 
		//在随机空位置生成一个数；

		//循环true(死循环)
		//0-3随机生成一个行号row
		//0-3随机生成一个列号col
		//如果 data[row][col]==0
		//Math.random():0~0.5~1;
		//   			 2   4
		//随机生成一个数>=0.5?4:2,放入data[row][col];
		//退出循环
		//alert(this.isFull());
		if(!this.isFull()){
			while(true){
				var row=parseInt(Math.random()*this.rn);
				var col=parseInt(Math.random()*this.cn);
				if(this.data[row][col]==0){
					this.data[row][col]=Math.random()>=0.5?4:2;
					return;
				};
			};
		};
	},
	upDataView:function(){
		//将二维数组中每个格的数字放入前景格中

		//遍历二维数组中的每个元素，比如：row=2,col=3,
		//var div=document.getElementById("c"+row+col);   网页中一切 元素 属性 文字 都是对象；****
		//如果当前元素的值!=0
		//div.innerHTML=当前元素的值,c元素标签里的内容；否则将div.innerHTML="";
		//如果当前元素的值!=0
		//div.className="cell n"+当前元素的值;否则div.className="cell"

		for(var row=0;row<this.rn;row++){
			for(var col=0;col<this.cn;col++){
				var div=document.getElementById("c"+row+col);
				var curr=this.data[row][col];
				div.innerHTML=curr!=0?curr:"";
				div.className=curr!=0?("cell n"+curr):"cell";
			};
		};
		var span=document.getElementById("score");
		span.innerHTML=this.score;
		//判断并修改游戏状态为GAMEOVER
		if(this.isGameOver()){
			this.state=this.GAMEOVER;
			var div=document.getElementById("gameOver");
			var span=document.getElementById("finalScore");
			span.innerHTML=this.score;
			//修改div的style属性下的display子属性为"block"
			div.style.display="block";
		}
	},
	/*左移*/
	getRightNext:function(row,col){
						//row,col:当前位置;
		//找当前位置右侧下一个不为0数字的位置；

		//从col+1开始，遍历row行中剩余元素，<cn结束；
		//只要遍历道德元素!=0,就返回 nextc(下一个元素的列下标)，如果循环退出，返回-1；
		for(var nextc=col+1;nextc<this.cn;nextc++){
			if(this.data[row][nextc]!=0){
				return nextc;
			};
		};
		return -1;
	},
	moveLeftInRow:function(row){
		//一行往左移：判断并移动 指定行 中的每个元素；

		//从0开始，遍历row行中每个元素，<col-1结束；
		//获得当前元素下一个(右侧)不为0元素的下标；
		//如果nextc==-1(说明右侧都是等于0的元素) break
		//否则
		//	如过当前位置==0，
		//	将下一个位置的值，放入当前位置；下一个位置设置为0;col--;让col退一格，重复检查一次
		//	否则，如过当前位置==nextc的位置
		//			将当前位置*2；下一个位置设置为0
		//			将当前位置的值，加到分数上

		for(var col=0,nextc=0;col<this.cn-1;col++){
			nextc=this.getRightNext(row,col);
			if(nextc==-1){
				break;
			}else{
				if(this.data[row][col]==0){
					this.data[row][col]=this.data[row][nextc];
					this.data[row][nextc]=0;
					col--;
				}else if(this.data[row][col]==this.data[row][nextc]){
					this.data[row][col]*=2;
					this.data[row][nextc]=0;
					this.score+=this.data[row][col];
				};
			};
		};
	},
	moveLeft:function(){
		//所有行往左移
		var oldstr=this.data.toString();
		for(var row=0;row<this.rn;row++){
			this.moveLeftInRow(row);//一行往左移
		};
		var newstr=this.data.toString();
		if(newstr!=oldstr){
			this.randomNum();		//随机生成一个数
			this.upDataView();		//更新数字
		};
	},
	/*右移*/
	getLeftNext:function(row,col){
		//找当前位置左侧下一个不为0数字的位置；

		//从col-1开始，遍历row行中剩余元素，>=0结束；
		for(var nextc=col-1;nextc>=0;nextc--){
			if(this.data[row][nextc]!=0){
				return nextc;
			};
		}
		return -1;
	},
	moveRightInRow:function(row){
		//一行往右移：判断并移动 指定行 中的每个元素；

		//从cn-1开始，遍历row行中每个元素，>0结束；
		//获得当前元素下一个(左侧)不为0元素的下标；
		//如果nextc==-1(说明左侧都是等于0的元素) break
		//否则
		//	如过当前位置==0，
		//	将下一个位置的值，放入当前位置；下一个位置设置为0;col++;让col退一格，重复检查一次
		//	否则，如过当前位置==nextc的位置
		//			将当前位置*2；下一个位置设置为0
		//			将当前位置的值，加到分数上

		for(var col=this.cn-1,nextc=0;col>0;col--){
			nextc=this.getLeftNext(row,col);
			if(nextc==-1){
				break;
			}else{
				if(this.data[row][col]==0){
					this.data[row][col]=this.data[row][nextc];
					this.data[row][nextc]=0;
					col++;
				}else if(this.data[row][col]==this.data[row][nextc]){
					this.data[row][col]*=2;
					this.data[row][nextc]=0;
					this.score+=this.data[row][col];
				};
			};
		};
	},
	moveRight:function(){
		//所有行往右移
		var oldstr=this.data.toString();
		for(var row=0;row<this.rn;row++){
			this.moveRightInRow(row);//一行往右移
		};
		var newstr=this.data.toString();
		if(newstr!=oldstr){
			this.randomNum();		//随机生成一个数
			this.upDataView();		//更新数字
		}
	},
	/*上移*/
	getDownNext:function(row,col){
		//找当前位置 下方 下一个不为0数字的位置；
		
		//nextr从row+1开始，到<this.rn结束；nextr++;
		for(var nextr=row+1;nextr<this.rn;nextr++){
			if(this.data[nextr][col]!=0){
				return nextr;
			};
		};
		return -1;
	},
	moveUpInCol:function(col){
		//一列往上移：判断并移动 指定列 中的每个元素；

		//row从0开始，到<this.rn-1结束，row++
		//获得当前位置下方不为0的行nextr
		//如果nextr==-1；break
		//	否则
		//	如过当前位置==0，
		//	将下一个位置的值，放入当前位置；下一个位置设置为0;row--;让row退一行，重复检查一次
		//	否则，如过当前位置==nextr的位置
		//			将当前位置*2；下一个位置设置为0
		//			将当前位置的值，加到分数上
		for(var row=0,nextr=0;row<this.rn-1;row++){
			nextr=this.getDownNext(row,col);
			if(nextr==-1){
				break;
			}else{
				if(this.data[row][col]==0){
					this.data[row][col]=this.data[nextr][col];
					this.data[nextr][col]=0;
					row--;
				}else if(this.data[row][col]==this.data[nextr][col]){
					this.data[row][col]*=2;
					this.data[nextr][col]=0;
					this.score+=this.data[row][col];
				};
			};

		};
	},
	moveUp:function(){
		//向上移动所有列；
		var oldstr=this.data.toString();
		for(var col=0;col<this.cn;col++){
			this.moveUpInCol(col);
		};
		var newstr=this.data.toString();
		if(oldstr!=newstr){
			this.randomNum();
			this.upDataView();
		};

	},
	/*下移*/
	getUpNext:function(row,col){
		//找当前位置 上方 下一个不为0数字的位置；

		//nextr从row-1开始，到>=0结束，nextr--；
		for(var nextr=row-1;nextr>=0;nextr--){
			if(this.data[nextr][col]!=0){
				return nextr;
			};
		};
		return -1;
	},
	moveDownInCol:function(col){
		//一列往下移：判断并移动 指定列 中的每个元素；

		//row从this.rn-1开始，到>0结束，row--
		//获得当前位置 上方 不为0的行nextr
		//如果nextr==-1；break
		//	否则
		//	如过当前位置==0，
		//	将下一个位置的值，放入当前位置；下一个位置设置为0;row++;让row退一行，重复检查一次
		//	否则，如过当前位置==nextr的位置
		//			将当前位置*2；下一个位置设置为0
		//			将当前位置的值，加到分数上
		for(var row=this.rn-1,nextr=0;row>0;row--){
			nextr=this.getUpNext(row,col);
			if(nextr==-1){
				break;
			}else{
				if(this.data[row][col]==0){
					this.data[row][col]=this.data[nextr][col];
					this.data[nextr][col]=0;
					row++;
				}else if(this.data[row][col]==this.data[nextr][col]){
					this.data[row][col]*=2;
					this.data[nextr][col]=0;
					this.score+=this.data[row][col];
				};
			};

		};
	},
	moveDown:function(){
		//向下移动所有列；
		var oldstr=this.data.toString();
		for(var col=0;col<this.cn;col++){
			this.moveDownInCol(col);
		};
		var newstr=this.data.toString();
		if(oldstr!=newstr){
			this.randomNum();
			this.upDataView();
		};
	}
}



//onload():页面加载“后”自动执行；
window.onload=function(){		
	game.start();		//页面加载后，自动加载游戏；
	document.onkeydown=function(){
		if(game.state==game.RUNNING){
			
			//获得时间对象中的键盘号：
			//事件对象：在事件发生时自动创建，封装了事件的信息；
			//        IE           dom标准
			//获得键盘号：e.keycode;
			//如果按左键，触发moveLeft();
			//如果按右键，触发moveRight();
			var e=window.event||arguments[0];
			
			if(e.keyCode==37){
				game.moveLeft();
			}else if(e.keyCode==39){
				game.moveRight();
			}else if(e.keyCode==38){
				game.moveUp();
			}else if(e.keyCode==40){
				game.moveDown();
			};
		}
	};

	//document.write(game.data.join("<br/>"));
	//console.log(game.getLeftNext(0,1));
	//console.log(game.getRightNext(2,1));
	//game.moveLeftInRow(1);
	//game.moveRightInRow(0);
	//console.log(game.getDownNext(1,1));
	//console.log(game.getUpNext(2,0));
	//game.moveUpInCol(3);
	//game.moveDownInCol(2);
	//game.upDataView();
	
}


















