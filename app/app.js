// create the module and name it cartApp
angular.module('cartApp', ['ngRoute', 'ngCookies'])

// configure our routes
.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : './view/product.html',
            controller  : 'productController'
        })

        .when('/cart', {
            templateUrl : './view/productCart.html',
            controller  : 'cartController'
        })
        .when('/description/:productId', {
            templateUrl : './view/productDescription.html',
            controller  : 'productDescriptionController'
        })
        .when('/payment', {
            templateUrl : './view/payment.html',
            controller  : 'checkOutController'
        });

});
