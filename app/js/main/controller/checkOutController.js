angular.module('cartApp')
    .controller('checkOutController', ['$rootScope','$cookies', function($rootScope, $cookies){
    $rootScope.orderedItem = [];
    $rootScope.itemCount = 0;
    $cookies.orderedItem = [];
    $cookies.itemCount = 0;
}]);