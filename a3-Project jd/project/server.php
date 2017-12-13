<?php
    /*
       1. 连接MySQL数据库，查询当前用户的所有订单信息
         * 与MySQL数据库建立连接
           mysqli_connect(url,username,pwd,dbname,port);
           返回MySQL数据库的连接对象
         * 定义SQL语句 - 字符串类型
         * 将SQL语句发送到MySQL数据库，进行执行
           * 查询数据库表数据，包含中文（解决中文乱码）
             * 在执行SQL语句前，先指定编码
               mysqli_query("SET NAMES utf8");
           mysqli_query(link,sql)
           * 如果是查询的话，成功返回结果集对象，失败返回false
         * 如果得到结果集对象，进行解析
         * 关闭与MySQL数据库的连接
           mysqli_close(link)
     */
    $conn = mysqli_connect('127.0.0.1','root','','jd','3306');
    // 根据当前用户查询对应的订单表
    $sql = "SELECT * FROM jd_orders WHERE user_name='aaa'";
    mysqli_query($conn,'SET NAMES utf8');
    $result = mysqli_query($conn,$sql);
    // 解析结果集对象
    //var_dump($result);

    mysqli_close($conn);

    // 2. 向客户端进行响应
    echo '{"msg":"get success."}';











?>