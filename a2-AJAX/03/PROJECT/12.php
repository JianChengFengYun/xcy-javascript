<?php
	// 1. 接收客户端请求的数据(callback)
	$callback = $_GET['callback'];
	// 2. 输出$callback
	//jQuery111309035243983380497_1448353822421
	//jQuery11130629496427020058_1448353921529
	//var_dump($callback);
	/*
	 * 3. 向客户端进行响应数据 - JSON
	 *  * 如果callback是一个函数的话,假设$callback就是函数的名称
	 *  * 函数的调用体 - $callback(实参)
	 *  * 向该函数传递的实参的格式为JSON
	 */
	echo $callback.'({"msg":"get success."})';
?>