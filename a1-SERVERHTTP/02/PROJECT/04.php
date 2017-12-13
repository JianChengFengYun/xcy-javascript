<?php
	/*
	 * boolean - true|false
	 * * true - 使用echo输出为1
	 * * false - 使用echo输出为''
	 */
	//$boo = true;
	/*
	 * var_dump()函数
	 * * 作用 - 打印变量的相关信息
	 */
	//var_dump($boo);	// output bool(true|false)
	
	//$integer = 100;
	//var_dump($integer);	// output int(数值)
	
	//$f = 3.579;
	//var_dump($f);		// output float/double(数值)

	$str1 = 'this is string.';
	//var_dump($str1);	// output string(字符个数) "字符串内容"

	$str2 = "$str1  this is string too.";
	var_dump($str2);
?>