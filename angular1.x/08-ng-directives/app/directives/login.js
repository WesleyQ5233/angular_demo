angular.module("demo.directives",[])
.directive("login",function(){
    return {
        restrict:"E",
        templateUrl:"app/templates/login-tpl.html",
        replace:false,
        transclude:true
    }
})
.directive("loginform",function(){
    return {
        restrict:"AE",
        templateUrl:"app/templates/form-tpl.html",
        replace:true
    }
})