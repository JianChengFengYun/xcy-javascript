function calc(btn){
	/*修改数量*/
	//先找到旁边的span
	//Step1: 向上找td
	var td=btn.parentNode;//向上爬
	//Step2: 在td下找span
	var span=td.getElementsByTagName("span")[0];
	         //向下爬
	//Step3: 取出span中的数n
	var n=span.innerHTML;
	//Step4: 如果btn是+，则n++，否则，则n--
	btn.innerHTML=="+"?n++:n--;            
	//Step5: 如果n==0，将n改为1
	n==0&&(n=1);
	//Step6: 将n放回span中
	span.innerHTML=n;

	/*计算小计*/
	//数量n已知
	//获得单价：
	//	向上一级获得tr
	var tr=td.parentNode;
	//	在tr下找所有td，存在tds中
	var tds=tr.getElementsByTagName("td");
	//	从下标为1的td中，获取innerHTML，保存在price
	//	￥4488-->4488
	//	从位置1截取price，再存回price
	var price=tds[1].innerHTML.slice(1);
	//	计算subTotal：price*n
	//	将&yen;拼上subTotal，放入下标为3的td中
	tds[3].innerHTML="&yen;"+(price*n).toFixed(2);

	//总计：
	/*var table=document.getElementById("data");
	//获得table中tbody下的所有tr，保存在trs
	var trs=table.tBodies[0].getElementsByTagName("tr");
	//遍历trs中每个tr
	for(var i=0,len=trs.length,total=0;i<len;i++){
	//    获得tr下最后一个td,转为整数，累加到total中
		var sub=
			parseFloat(trs[i].getElementsByTagName("td")[3]
							.innerHTML
							.slice(1));
		total+=sub;
	}//(遍历结束后)将total放入tfoot下最后一个td中
	table.tFoot.getElementsByTagName("td")[1].innerHTML=
		"&yen;"+total.toFixed(2);*/
	var subs=document.querySelectorAll("table tbody tr td:last-child");
	for(var i=0,total=0;i<subs.length;i++){
		total+=parseFloat(subs[i].innerHTML.slice(1));
	}
	document.querySelector("table tfoot td:last-child").innerHTML
		="&yen;"+total.toFixed(2);
}