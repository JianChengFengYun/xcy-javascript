window.$=function(selector){
	return document.querySelectorAll(selector);
}
var timer=null;
function calc(){
	var now=new Date();
	var h=now.getHours();
	h>12&&(h-=12);
	var m=now.getMinutes();
	var s=now.getSeconds()
	var rh=(h*3600+m*60+s)/43200*360;
	var rm=(m*60+s)/3600*360;
	var rs=(s/60)*360;
	$("#h")[0].style.transform="rotate("+rh+"deg)";
	$("#m")[0].style.transform="rotate("+rm+"deg)";
	$("#s")[0].style.transform="rotate("+rs+"deg)";
	timer=setTimeout(calc,1000);
};
window.onload=function(){
	calc();
}