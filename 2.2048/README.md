键盘操作

```js

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

```