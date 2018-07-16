angular.module('cartApp')
    .controller('productDescriptionController', ['$scope','$rootScope','$http', '$routeParams', '$cookies', function($scope, $rootScope, $http, $routeParams, $cookies){
    $http.get('/listItem.json')
        .then(function (response) {
            $scope.itemList = response.data.items;
            var productId = $routeParams.productId;
            angular.forEach($scope.itemList, function (value, key) {
                if (value.productId === productId) {
                    $scope.item = value;
                }
            });
        });

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