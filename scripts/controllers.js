/* 该js文件主要用于定义控制器 */

//创建一个控制器模块
angular.module("ctrls",[])
//创建导航栏的控制器,模拟导航栏数据,绑定传递过去
.controller("navs",["$scope",function($scope){
    $scope.navs = [
        {link:"#/index",   icon:"icon-home",      text:"今日一刻"},
        {link:"#/older",   icon:"icon-file-empty",text:"往期内容"},
        {link:"#/author",  icon:"icon-pencil",    text:"热门作者"},
        {link:"#category", icon:"icon-menu",      text:"栏目浏览"},
        {link:"#/favorite",icon:"icon-heart",     text:"我的喜欢"},
        {link:"#/settings",icon:"icon-cog",       text:"设置"}
    ]
}])
//创建index控制器
.controller("index",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    //模拟数据
    // $scope.msg = '控制器获取的index数据';
    //绑定num,判定被点击标题被选中状态
    $rootScope.num=0;

//3.4 获取当前时间(今天的日期)
    var now = new Date();
    //格式化时间(2018-8-14)
    now = $filter("date")(now,"yyyy-MM-dd");

 //1 向后台发送请求
    $http({
        // url:"./api/index.php"
        //下面的url不能直接发送给服务器,会产生跨域问题
        //解决办法:从后台php发送请求,获取数据
        // url:"https://moment.douban.com/api/stream/date/2017-5-11?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6"
        url:"./api/index.php",

        //3.4传递参数
        params:{time:now}
        //success方法已经被淘汰,使用then方法来替代
     //}).success(function(result){ 
   }).then(function(result){
       console.log(result.data);
        $scope.posts = result.data.posts;
    })
}])
.controller("older",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
    // $scope.msg = '控制器获取的older数据';
    $rootScope.num=1;

    //獲取時間
    var now = new Date();
    //獲取前一天的時間
    now.setDate(now.getDate()-1);
    now = $filter("date")(now,"yyyy-MM-dd");
    
    $http({
        url:"./api/older.php",
        params:{time:now}
    }).then(function(result){
        console.log(result.data);
        $scope.posts=result.data.posts;
    })
}])
.controller("author",["$scope","$rootScope",function($scope,$rootScope){
    $scope.msg = '控制器获取的author数据';
    $rootScope.num=2;
}])
.controller("category",["$scope","$rootScope",function($scope,$rootScope){
    $scope.msg = '控制器获取的category数据';
    $rootScope.num=3;
}])
.controller("favorite",["$scope","$rootScope",function($scope,$rootScope){
    $scope.msg = '控制器获取的favorite数据';
    $rootScope.num=4;
}])
.controller("settings",["$scope","$rootScope",function($scope,$rootScope){
    $scope.msg = '控制器获取的settings数据';
    $rootScope.num=5;
}])
