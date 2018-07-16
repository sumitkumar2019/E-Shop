'use strict';

describe('cartApp module', function() {
    beforeEach(module('cartApp','ngCookies'));
    var productController;
    var $scope, $httpBackend;
    describe('product controller', function(){

        beforeEach(angular.mock.inject(function(_$controller_, $rootScope, _$httpBackend_){
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            productController = _$controller_('productController',{$scope:$scope});
        }));

        it('should inject controller', function() {
            expect(productController).toBeDefined();
        });

    });
});