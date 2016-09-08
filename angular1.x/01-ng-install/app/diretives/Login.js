

angular.module("demo.directives",[])
.directive("login",function(){
    return {
        restrict:"AE",
        templateUrl:"app/templates/login.html",
        replace:true,
        link:function(scope,attrs,eles){
           scope.login = function(){
               alert(1);
           }
        }
    }
})