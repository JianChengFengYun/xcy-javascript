//定时器三件事：
//每一步要执行的任务：
/*
function calc(){//计算当前时间，距离目标时间的倒计时；
	//hh:mm:ss
	var target=new Date("2015/10/26 18:30:00");
	var now=new Date();
	var ms=target-now;
	if(ms>=1000){
		var h=parseInt(ms/(3600*1000));
		var m=parseInt(ms%(3600*1000)/60000);
		var s=parseInt(ms%(3600*1000)%60000/1000);
		h=h<10?("0"+h):h;
		m=m<10?("0"+m):m;
		s=s<10?("0"+s):s;
		var span=document.querySelector("span")
			span.innerHTML=span.innerHTML.indexOf(":")==-1?h+":"+m+":"+s:
														h+" "+m+" "+s;
	}else{
		clearInterval(timer);
		timer=null;
		document.querySelector("span").innerHTML="00:00:00";
	}
}
*/
function calc(){//计算当前时间，距离目标时间的倒计时；
	//hh:mm:ss
	var target=new Date("2015/10/26 18:30:00");
	var now=new Date();
	var ms=target-now;
	var h=parseInt(ms/(3600*1000));
	var m=parseInt(ms%(3600*1000)/60000);
	var s=parseInt(ms%(3600*1000)%60000/1000);
	h=h<10?("0"+h):h;
	m=m<10?("0"+m):m;
	s=s<10?("0"+s):s;
	var span=document.querySelector("span")
		span.innerHTML=span.innerHTML.indexOf(":")==-1?h+":"+m+":"+s:
													h+" "+m+" "+s;
	if(ms>=1000){
		timer=setTimeout(calc,500);
	}else{
		timer=null;
		document.querySelector("span").innerHTML="00:00:00";
	}
}

var timer=null;
window.onload=function(){
	calc();
	//timer=setInterval(calc,500);
	
}
function stop(btn){
	if(timer){
			//停止定时器
			clearInterval(timer);
			timer=null;
			var span=document.querySelector("span")
			span.innerHTML=span.innerHTML.replace(/\s+/g,":");
			btn.innerHTML="启动定时器";
		}else{
			//启动定时器
			calc();
			timer=setInterval(calc,500)
			btn.innerHTML="停止定时器";
		}
	
}