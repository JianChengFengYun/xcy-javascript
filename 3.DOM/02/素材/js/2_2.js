window.$=function(selector){
	return document.querySelectorAll(selector);
}
/*定义两个数组：
	unsel:存所有未选中的国家
	sel:存所有选中的国家
页面加载后：
	将左侧select元素中所有potion元素的文本提取到unsel中；（不用遍历）
	初始化sel数组；
*/
var unsel=null;
var sel=null;
window.onload=function(){
unsel=$("#unsel")[0].innerHTML.trim().slice(8,-9).split(/<\/option>\s*<option>/);
sel=[];
}
function move(btn){
	if(btn.innerHTML=="&gt;&gt;"){
	//如果btn的内容是>>,将unsel的元素，拼入sel排序后，
		sel=sel.concat(unsel).sort();
		unsel.length=0;
	}else if(btn.innerHTML=="&lt;&lt;"){
	//否则如果btn的内容是<<,将sel的元素，拼入unsel排序后，
		unsel=unsel.concat(sel).sort();
		sel.length=0;
	}else if(btn.innerHTML=="&gt;"){
	/*否则如果btn内容是>,将unsel里选中的移入sel；selected->true / false;
		遍历左边的所有option，只要发现selected有效，先删除并获取unsel中相同位置的元素，在给sel
		遍历结束后排序；
	*/
		var opts=$("#unsel option");
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected){
				sel.push(unsel.splice(i,1)[0]);//***splice返回的是数组加下标取值，遍历过程中会影响下标，从后向前遍历；
			}
		};
		sel.sort();
	}else{
		var opts=$("#sel option");
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected){
				unsel.push(sel.splice(i,1)[0]);//***
			}
		};
		unsel.sort();
	}
	updateSel();
};
function updateSel(){  //更新两select元素的内容
	// 将unsel的元素，拼为html给id为unsel的select
	// 将sel的元素，拼为html给id为sel的select
	$("#unsel")[0].innerHTML="<option>"+unsel.join("</option><option>")+"</option>";
	$("#sel")[0].innerHTML="<option>"+sel.join("</option><option>")+"</option>";

}