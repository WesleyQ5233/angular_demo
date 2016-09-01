demoCtrl.controller("LoginController",["$scope","$location",function($scope,$location){
    $scope.title="学校管理系统登录";
    $scope.style = "panel-danger";
    $scope.login = function(n,p){
        $location.url("/main")
    };

    $scope.class = "login";
}]);