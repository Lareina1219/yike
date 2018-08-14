<?php
/* 处理请求返回数据 */

//模拟返回一个数据
// echo "从php返回的数据";

//3.4 获取参数, 修改$url里的时间'.$params.'
$params = $_GET["time"];

//向yike的服务器发送请求,获取请求数据
    $url = 'https://moment.douban.com/api/stream/date/'.$params.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
    echo file_get_contents($url);

?>