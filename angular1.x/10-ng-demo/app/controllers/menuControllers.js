demoCtrl.controller("menuController", function ($scope,menuService) {
        $scope.menus = menuService.getMenu() ;

    });