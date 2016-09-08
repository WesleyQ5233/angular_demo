
angular.module("demo.shop.controllers",[])
  .controller("cartController",["$scope",function($scope){


      //mock data
      $scope.dataList = [
          {
              "title":"小狗（puppy)无尘袋家用静音吸尘器D",
              "price":3455,
              "quality":1,
              "pic":"assets/77f4.jpg"
          },
          {
              "title":"小型超静音除螨大功率家",
              "price":43,
              "quality":1,
              "pic":"assets/93b92.jpg"
          },
          {
              "title":"拉杆箱 登机箱 旅行箱 20寸 银灰色 ",
              "price":3434,
              "quality":1,
              "pic":"assets/a13.jpg"
          },
          {
              "title":"纯色七分袖T恤虽款式简单，但休闲之中却显瘦",
              "price":55,
              "quality":1,
              "pic":"assets/e2.jpg"
          }
      ];


      _countProcut();

      function _countProcut(){
          //总的个数
          $scope.totalQal = 0;

          //总价
          $scope.totalPrice =0;

          //通过for 循环计算总的个数和总价
          angular.forEach($scope.dataList,function(v){
              $scope.totalQal += v.quality;
              $scope.totalPrice += v.price * v.quality;
          })
      }

      $scope.add = function(index){
          $scope.dataList[index].quality ++;
          _countProcut()
      }

      $scope.sub = function(index){
          if($scope.dataList[index].quality <=1){
              $scope.dataList[index].quality =1;
          }else {
              $scope.dataList[index].quality --;
          }

          _countProcut()
      }

}])