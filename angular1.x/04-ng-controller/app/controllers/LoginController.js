/**
 * Created by xuyan on 2016/8/25.
 */


angular.module("demo.Controllers",[])
.controller("LoginController",function($scope){
    //$scope来完成视图和controller之间连接
    //$scope是实现MVC的关键
    //$scope: 1,接收view的事件并响应 2.把数据传给view

    $scope.msg = "ddd";

    $scope.userInfo={name:"",pass:""};

    $scope.login = function(){
        alert($scope.userInfo.name);
    }

    $scope.getList = [{"title":"xxx"}]

})