/**
 * Created by my on 2016/8/30.
 */
angular.module("demo.directives",[])
.directive("login", function(){
    return {
        restrict:"E",
        templateUrl:"app/templates/login-tpl.html",/*这里以宿主文件为基准写相对路径奥 开发中可采用这种方式引入外部模板文件*/
        replace:false,
        transclude:true
    }
})

.directive("loginform", function(){
    return{
        restrict:"AE",
        templateUrl:"app/templates/form-tpl.html",
        replace:true
    }
})
