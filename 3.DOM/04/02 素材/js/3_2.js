window.$=HTMLElement.prototype.$=function(Selector){
		return (this==window?document:this).querySelectorAll(Selector);
}
/**
将当前文本框获得焦点时：
   当前文本框：txt_focus ；div隐藏
**/
window.onload=function(){
	var form=document.forms[0];
	var txtName=form.elements["userName"];//elements只保存有name属性的元素；
	var txtPwd=form.elements["pwd"];
	txtName.onfocus=txtPwd.onfocus=function(){//获取焦点事件；
		this.className="txt_focus";
		this.parentNode.parentNode.$("div")[0].removeAttribute("class");
	}
	txtName.onblur=valiName;
	txtPwd.onblur=valiPwd;
	//表单重置
	form.reset=function(){
		var divs=$("form div")
		for(var i=0;i<divs.length;i++){
			divs[i].className="vali_Info";
		};

	};
	//表单提交
	form.onsubmit=function(){
		//依次调用每个文本框的验证方法；如果有一个返回false,就取消事件；
		var r=true;
		r=txtName.onblur()&&txtPwd.onblur();
		if(!r){
			var e=window.event||arguments[0];//取消默认事件；
			if(e.preventDefault){
				e.preventDefault();//DOM
			}else{
				e.returnValue=false;//IE8
			};
		}
	};
}
function valiName(){ //验证姓名文本框的方法；
	// 当前文本框对象去掉获取焦点的样式；
	// 找到旁边div；
	// 使用正则验证内容是否正确；正确class=vali_success；错误：vali_fail；
	// 返回正则结果；
	this.className="";
	var div=this.parentNode.parentNode.$("div")[0];
	var r=/^\w{1,10}$/.test(this.value);
	div.className=r?"vali_success":"vali_fail";
	return r;
}
function valiPwd(){ //验证密码文本框的方法；
	this.className="";
	var div=this.parentNode.parentNode.$("div")[0];
	var r=/^\d{6}$/.test(this.value);
	div.className=r?"vali_success":"vali_fail";
	return r;

}






