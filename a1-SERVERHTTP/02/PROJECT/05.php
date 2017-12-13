<?php
	// 定义一个数组

	// 1. 类似于javascript直接量方式定义数组
	$arr1 = [1,2,3,4,5];
	//var_dump($arr1);
	
	$arr2 = ['zhangwuji','zhouzhiruo','zhaomin'];
	//var_dump($arr2);

	/*
	 * 2. 定义索引数组
	 *  array(
	 *     索引值 => 元素内容,
	 *     索引值 => 元素内容,
	 *     索引值 => 元素内容,
	 *     ...
	 *  )
	 */
	$arr3 = array(
		0 => 1,
		1 => 2,
		2 => 3
	);
	//var_dump($arr3);

	/*
	 * 3. 定义关联数组
	 *  array(
	 *     key(键) => 元素内容,
	 *     key(键) => 元素内容,
	 *     key(键) => 元素内容,
	 *     ...
	 *  )
	 */
	$arr4 = array(
		'name1' => 'zhangwuji',
		"name2" => 'zhouzhiruo'
	);
	var_dump($arr4);
?>