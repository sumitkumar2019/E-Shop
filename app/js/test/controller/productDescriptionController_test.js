'use strict';

describe('cartApp module', function() {
    beforeEach(module('cartApp', 'ngCookies'));
    var productDescriptionController;
    var $scope;
    describe('product description controller', function(){

        beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
            $scope = $rootScope.$new();
            productDescriptionController = _$controller_('productDescriptionController', {$scope:$scope, $routeParams:{}});
        }));

        it('should inject controller', function() {
            expect(productDescriptionController).toBeDefined();
        });

    });
});