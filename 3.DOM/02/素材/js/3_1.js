window.onload=function(){
	//获得ul下li的个数；
	var lis=document.querySelectorAll("ul li");
	var nums=[];
	//反复生成随机数，nums.length<lis.length;
	//在1到lis.length之间取1个随机整数n；
	//利用nums的indexof方法，查找是否包含n
	//不包含就放入nums；
	while(nums.length<lis.length){
		var n=parseInt(Math.random()*(lis.length-1+1)+1);
		if(nums.indexOf(n)==-1){nums.push(n);}
	}
	console.log(nums);
	//将nums中的数字，保存到每个li的data-i自定义属性中
	//遍历nums
	//将nums中当前位置的数字，放到相同位置的li的data-i属性上；

	for(var i=0;i<nums.length;i++){
		lis[i].setAttribute("data-i",nums[i]);
	};
			/*将所有li按ata-i属性值升序排序；
			lis是类数组对象，没有sort，-- 
			将类数组对象转换为标准数组；lis=Array.prototype.slice.call(lis);******/
			
	lis=Array.prototype.slice.call(lis);
	lis.sort(function(a,b){
				//return a.getAttribute("data-i")-b.getAttribute("data-i");
				return a.dataset.i-b.dataset.i;//HTML5中读取自定义属性；
			});
	var ul=document.querySelector("ul");
	ul.innerHTML="";
	for(var i=0;i<lis.length;i++){
		ul.appendChild(lis[i]);
	};
};