angular.module("demo.dev.controllers", [])
    .controller("menuController", function ($scope,menuService) {
        $scope.menus = menuService.getMenu();

    })