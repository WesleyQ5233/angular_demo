angular.module("demo.shop.services",[])
    .service("keyWordService",function(){

        var _key = "dm";

        var _getLocalStorage = function(){
            return window.localStorage.getItem(_key);
        }

        var _setLocalStorage = function(wd){
            window.localStorage.setItem(_key,wd);
        }

        /**
         * 添加搜素关键字到Localstorage
         * @param wd
         */
        this.addKeyWords = function(wd){
            //获取_key中的值
           var oldVal = _getLocalStorage();
           if(oldVal != null){
               oldVal = oldVal +"|" + wd;
               window.localStorage.setItem(_key,oldVal);
           }else {
               window.localStorage.setItem(_key,wd);
           }
        };


        /**
         * 获取所有的关键字列表
         */
        this.getKeyWordsList = function(){
            var list =_getLocalStorage();
            if(list !=null){
                return list.split("|");
            }

        }

        /**
         * 删除数组的值
         * @param index
         */
        this.deleteKeyWordById = function(index){
            var list =_getLocalStorage();
            if(list != null){
                var arr = list.split("|");
                console.log(arr);
                var val = arr.splice(index,1);
                var newArr = [];
                angular.forEach(arr,function(vals){
                   newArr.push(vals);
                })
            }
           window.localStorage.setItem(_key,newArr.join("|"));
        }




    })
    .service("productService",["$http","$q",function($http,$q){

         this.getSearchList = function(wd){
             var _url = " http://datainfo.duapp.com/shopdata/selectGoodes.php?selectText="+decodeURI(wd)+"&callback=JSON_CALLBACK";
             var defered = $q.defer();
             $http({
                 url:_url,
                 method:"JSONP"
             }).success(function(data){
                 defered.resolve(data);
             }).error(function(error){
                 defered.reject(error);
             })

             return defered.promise;
         }
    }])
