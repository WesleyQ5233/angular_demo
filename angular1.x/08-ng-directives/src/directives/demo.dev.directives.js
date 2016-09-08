angular.module("demo.dev.directives",[])
    .directive("header",function(){
        return {
            restrict:"AE",
            templateUrl:"src/templates/header-tpl.html",
            replace:true
        }
    })
    .directive("sitemenus",function(menuService){
        return {
            scope:{},
            restrict:"AE",
            template:"<div ng-transclude></div>",
            replace:false,
            transclude:true,
            controller:function($scope,$element){
                //获取所有菜单信息
                var menus= menuService.getMenu();
                console.log(menus)
                //可以根据index来获取单个信息
                this.getMenuInfo = function(index){
                    return menus[index];
                }

                this.isshowMenu = function(index){
                    menus.forEach(function(v,i){
                        console.log(index)
                        if(menus[i].title == index){
                            menus[i].isshow = "display: block;";
                        }else{
                            menus[i].isshow = "display: none;";
                        }
                    })


                }
            },
            link:function(scope,element,attr,ctrl){

            }

        }
    })
    .directive("menu",function(){
        return {
            require:"?^sitemenus",
            scope:{},
            restrict:"AE",
            templateUrl:"src/templates/menu-tpl.html",
            replace:true,
            link:function(scope,element,attr,ctrl){
               scope.menu = ctrl.getMenuInfo(attr["ide"]);
               scope.menu.isshow="display:none"

                scope.showmen = function(index){
                    console.log(index)
                    ctrl.isshowMenu(index);
                }

            }
        }
    })
