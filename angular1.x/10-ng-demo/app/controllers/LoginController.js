/**
 * Created by my on 2016/9/1.
 */
demoCtrl.controller("LoginController", ["$scope", "location", function($scope, $location){
    $scope.title = "学校管理系统登录";
    $scope.style = "panel-danger";
    $scope.login = function(n,p){//点击登录成功后跳转
        $location.url("/main")
    };

    $scope.class = "login";
}]);