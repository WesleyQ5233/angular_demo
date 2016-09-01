/**
 * Created by my on 2016/9/1.
 */
demoCtrl.controller("menuController", function($scope, menuService){
    $scope.menus = menuService.getMenu();
})