<?php
	// 定义一个常量
	const str = 'this is string.';
	/*
	 * 报错
	 * * 错误信息
	 *   Parse error: syntax error, unexpected '=' in
	 * * 原因
	 *   * str定义为常量,常量是不允许重复赋值的
	 */
	//str = 'abcdefg';

	// 使用echo进行输出
	//echo str;

	// 定义一个变量
	$str = 'this is string too.';
	$str = 'abcdefg';
	echo $str;
?>