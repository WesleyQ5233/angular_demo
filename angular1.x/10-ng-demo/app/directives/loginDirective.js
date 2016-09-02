demoDire.directive("login",function(){
    return {
        scope:{
            tl:"@",
            cc:"@",
            cm:"&"   //& 方法
        },
        restrict:"AE",
        templateUrl:"app/templates/login-tpls.html",
        replace:false,
        transclude:true,

    }
});