angular.module('cartApp')
    .controller('productController', ['$scope','$rootScope','$http', '$cookies', function($scope, $rootScope, $http, $cookies){
    if($cookies.itemCount === undefined){
        $cookies.orderedItem = [];
    }
    if($cookies.itemCount === undefined){
        $cookies.itemCount = 0;
    }
    if($cookies.total === undefined){
        $cookies.total = 0;
    }
    $rootScope.itemCount = $cookies.itemCount;
    $scope.getItems = function(){
        $http.get('/listItem.json')
            .then(function (response) {
                $scope.itemList = response.data.items;
            });
    }
    $scope.searchOptions = {
        Store : "store",
        Availability : "available",
    }

    $scope.addItems = function(item){
        var orderedItem = $cookies.orderedItem;
        var count = $cookies.itemCount + 1;
        var total = $cookies.total + Number(item.price);
        orderedItem.push(item);
        $cookies.orderedItem = orderedItem;
        $rootScope.itemCount = count;
        $cookies.itemCount = count;
        $cookies.total = total;
        $rootScope.total = total;
    }
}]);