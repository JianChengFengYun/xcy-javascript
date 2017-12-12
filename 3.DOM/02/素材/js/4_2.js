window.onload=function(){
	//获得第2个样式表对象；
	var sheet=document.styleSheets[1];
	//获得样式表中所有的cssRule;
	var rules=sheet.cssRules;
	//分别获得秒，时，分的cssRules；
	var rs=rules[rules.length-3];
	var rm=rules[rules.length-2];
	var rh=rules[rules.length-1];
	//获得当前时间的时，分，秒
	var now=new Date();
	var s=now.getSeconds();
	var m=now.getMinutes();
	var h=now.getHours();
	h>12&&(h-=12);
	var sDeg=s/60*360;
	var mDeg=(m*60+s)/3600*360;
	var hDeg=(h*3600+m*60+s)/(3600*12)*360;
	rs.cssRules[0].style.transform="rotate("+sDeg+"deg)";
	rs.cssRules[1].style.transform="rotate("+(sDeg+360)+"deg)";
	rm.cssRules[0].style.transform="rotate("+mDeg+"deg)";
	rm.cssRules[1].style.transform="rotate("+(mDeg+360)+"deg)";
	rh.cssRules[0].style.transform="rotate("+hDeg+"deg)";
	rh.cssRules[1].style.transform="rotate("+(hDeg+360)+"deg)";
};

