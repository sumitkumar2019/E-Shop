angular.module('cartApp')
.controller('cartController', ['$scope','$rootScope', '$cookies', function($scope, $rootScope, $cookies){
    $scope.orderedItem = $cookies.orderedItem;

    $scope.removeItems = function(item){
        var orderItems = $cookies.orderedItem;
        var total = $cookies.total - Number(item.price);
        var index = orderItems.indexOf(item);
        if (index > -1) {
            orderItems.splice(index, 1);
        }
        var count = $cookies.itemCount - 1;
        $cookies.orderedItem = orderItems;
        $rootScope.itemCount = count;
        $cookies.itemCount = count;
        $rootScope.total = total;
        $cookies.total = total;
    }

}]);