<?php
	$province = $_POST['province'];

	// 向客户端响应的数据 - XML格式
	header("Content-Type:text/xml");

	switch ($province){
		case '山东省':
			echo '<cities><city name="青岛市" /><city name="济南市" /><city name="威海市" /><city name="日照市" /><city name="德州市" /></cities>';
			break;
		case '辽宁省':
			echo '<cities><city name="沈阳市" /><city name="大连市" /><city name="铁岭市" /><city name="丹东市" /><city name="锦州市" /></cities>';
			break;
		case '吉林省':
			echo '<cities><city name="长春市" /><city name="松原市" /><city name="通化市" /><city name="四平市" /><city name="辽源市" /></cities>';
			break;
	}
	
?>