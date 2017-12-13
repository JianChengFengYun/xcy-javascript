// 建议积累自己的工具库
function getXhr(){
	// 声明XMLHttpRequest对象
	var xhr = null;
	// 根据浏览器的不同情况进行创建
    if(window.XMLHttpRequest){
		// 表示除IE外的其他浏览器
		xhr = new XMLHttpRequest();
    }else{
		// 表示IE浏览器
		xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    return xhr;
}