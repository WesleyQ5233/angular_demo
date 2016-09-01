var demoCtrl = angular.module("com.sh.demo.controllers",[]);

/**
 * 说明:studentController
 * 详细说明:xxxx
 * 作者:徐礼文
 * 创建时间: 2016-9-1
 */
demoCtrl.controller("studentController",["$scope",function($scope){
   $scope.msg = "hello";
}]);

demoCtrl.controller("teacherController",["$scope",function($scope){
    $scope.msg = "hello teacher";
}]);
demoCtrl.controller("menuController", function ($scope,menuService) {
        $scope.menus = menuService.getMenu() ;

    });
demoCtrl.controller("LoginController",["$scope","$location",function($scope,$location){
    $scope.title="学校管理系统登录";
    $scope.style = "panel-danger";
    $scope.login = function(n,p){
        $location.url("/main")
    };

    $scope.class = "login";
}]);
demoCtrl.controller("mainController",["$scope",function($scope){

}]);