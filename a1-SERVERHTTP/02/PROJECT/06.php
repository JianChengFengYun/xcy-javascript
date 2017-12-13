<?php
	// 定义一个类foo - 类似于javascript的构造器
	class foo{
		// 定义一个方法do_foo()
		function do_foo(){
			echo "Doing foo."; 
		}
	}
	// 通过new关键字实例化一个对象
	$bar = new foo;
	// 通过$bar对象,调用do_foo()方法
?>