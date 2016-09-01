angular.module("demo.shop.controllers",[])
.controller("searchController",[
    "$scope",
    "keyWordService",
    "productService",
    function($scope,keyWordService,productService){

    $scope.saveKw = function(){
        console.log($scope.kw);
        keyWordService.addKeyWords($scope.kw)
    }

    $scope.removeKw = function(index){
       console.log(index);
        keyWordService.deleteKeyWordById(index);
    }
    $scope.keywordsList = keyWordService.getKeyWordsList();



    $scope.isShow = "display:block";
    $scope.showsearch = "display:none";
    $scope.search = function(){
        $scope.isShow = "display:none";
        $scope.showsearch = "display:block";
        //商品服务
        productService.getSearchList(encodeURI("衣")).then(function(data){
           $scope.jlist= data;
            console.log(data);
        })
    }
}])