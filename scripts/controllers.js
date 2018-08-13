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
.controller("index",["$scope","$rootScope",function($scope,$rootScope){
    //模拟数据
    $scope.msg = '控制器获取的index数据';
    //绑定num,判定被点击标题被选中状态
    $rootScope.num=0;
}])
.controller("older",["$scope","$rootScope",function($scope,$rootScope){
    $scope.msg = '控制器获取的older数据';
    $rootScope.num=1;
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
