'use strict';
describe('cartApp module', function() {
    beforeEach(module('cartApp','ngCookies'));
    var cartController;
    var $scope;
    describe('cart controller', function(){

        beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
            $scope = $rootScope.$new();
            cartController = _$controller_('cartController',{$scope:$scope});
        }));

        it('should inject controller', function() {
            expect(cartController).toBeDefined();
        });
    });
});