﻿
1. 获取子字符串：3种：
	1. var subStr=str.slice(starti[,endi+1])
	  pid.slice(6,-5+1);
	2. var subStr=str.substring(starti[,endi+1])
	  不支持负数参数
	  pid.substring(6,pid.length-5+1);

	3. var subStr=str.substr(starti,取几个);
	  pid.substr(6,8)

2.分割
	var arr=str.split("分隔符") 使用指定分隔符对字符串进行拆分；

	如何使用：只要分段处理字符串，都先分割成数组，在遍历；

	固定套路：将字符串切割为字符数组；
		  var char=str.split("");

3.模式匹配：
	按照规则查找和替换字符串中的子内容；

	1.查找：var i=str.search("kword");
		只能从开始位置，找“第一个”匹配的关键字；没找到返回-1；

		使用：仅判断“有没有”关键词时；

		search()  VS  indexOf();
		var i=str.search(/kword/i);忽略大小写；
		search() 支持模式匹配；

	2.获得所有关键字的内容：或个数；
		var arr=str.match(/kword/g);   match默认只找一个；
		arr中保存了所有关键字的“内容”；
		arr.length返回关键字的“个数”；
		 ********** 没找到返回“null”； ***********
			先判断是否为null，再处理；
		能得到第一个匹配的关键字的位置:arr.index,只有在不加g的情况下才有用；

	3.替换
		var newStr=str.replace(模式,"替换成什么内容");


4.正则表达式：规定字符串中字符 格式规则 的表达式；
	何时使用：只要定义字符串中字符 格式规则，就用正则表达式；

	1.备选字符集：规定某“一位”字符可选的备选字符列表；
	  语法：[备选字符列表]
	  强调：无论字符集中有多少字符，必须选一个 且 只能选一个；一个“[]”只代表一位字符；

	  [^]:^ “非”，除了什么都行。

	2.-：如果备选字符连续，可用- 表示“到”；unicode号；
	  如：[0-9]:0到9；

	3.预定义字符集：表示常用的连续的字符集；
	  \d==>[0-9]		一位数字；
	  \w==>[0-9a-zA-Z_]	一位数字、字母或下滑线；
	  \s==>[空字符]		一位空字符：\t \n " "
	  .			除了换行外，其他所有字符，匹配任意字符；

	4.量词：规定一个字符集出现的次数；
	  明确数量：3种：
		{min,max}	最小min位，最多max位；
		{min,}		至少min位；
		{n}		必须6位，不能多，不能少；

	  不明确数量：3种
	  ?==>{0,1}		可有可无，最多一次；
	  *==>{0,}		可有可无，多了数量不限；
	  +==>{0,}		至少一次，多了数量不限；


	  身份证号：
	  \d{15}(\d{2}[0-9Xx])?
	  15位数字
	  15位数字+2位数字+1位数字或X(x)

	  手机号：
	  (\+86)?\s*1[34578]\d{9}
	  (\+86|0086)?\s*1[34578]\d{9}

	  | 或;
























