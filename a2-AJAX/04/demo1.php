<?php
//处理AJAX异步请求
/*
1.接受客户端请求的数据
*/
$user=$_POST['user'];
//$pwd=$_post['pwd'];

$conn=mysqli_connect('127.0.0.1','root','','day1128','3306');
$sql="SELECT name FROM myform WHERE name='$user'";
mysqli_query($conn,'SET NAMES UTF8');
$result=mysqli_query($conn,$sql);
//var_dump($result);
if($result->num_rows>0){
	echo "用户名已存在";
}else{
	$sql="INSERT INTO myform(name) VALUES('$user')";
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	if($result){
	echo "注册成功";
	}else{
	echo "注册失败";
	}
}
mysqli_close($conn);

?>