<?php
    $params = $_GET["time"];
    $url='https://moment.douban.com/api/stream/date/'.$params.'?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
    echo file_get_contents($url);

  /* 熱門作者部分返回多個url,參考下面的
  
    $params = $_GET["time"];
    $url_1 = '';
    $url_2='';
    $tuijian =  file_get_contents($url_1);
    $quanbu =  file_get_contents($url_2);
    $data = array( $tuijian,$quanbu);
    echo $data; */

?>