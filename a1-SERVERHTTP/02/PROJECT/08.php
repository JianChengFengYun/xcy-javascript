<?php
	$arr = ['zhangwuji','zhouzhiruo','zhaomin','xiaozhao'];

	/* while
	$i = 0;
	while($i < 10){
		echo $i;
		$i++;
	}*/

	/* do..while
	$i = 0;
	do{
		echo $i;
		$i++;
	}while($i < 1);
	*/

	/* for
	for($i=0;$i<4;$i++){
		echo $arr[$i];
	}*/

	//foreach
	foreach($arr as $i => $value){
		//var_dump($arr[$i]);
		var_dump($value);
	}
?>