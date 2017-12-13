<?php
	// 研究SELECT语句返回的结果集对象
	$conn = mysqli_connect('127.0.0.1','root','','day1117','3306');
	$sql = 'SELECT * FROM myorder';
	/*
	 * mysqli_query()方法执行的SELECT语句
	 * * 该方法的返回值为mysqli_result对象
	 *   * 属性
	 *     * num_rows - 得到记录条数
	 *     * field_count - 得到字段数量
	 */
	$result = mysqli_query($conn,$sql);

	//var_dump($result);
	// 判断$result对象是否存在
	if($result){
		//var_dump($result->field_count);

		$arr = mysqli_fetch_array($result);
		//var_dump($arr);
		var_dump($arr['ordername']);
		/*
		foreach($arr as $i => $value){
			var_dump($arr['ordername']);
		}*/
	}
?>