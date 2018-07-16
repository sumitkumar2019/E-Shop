'use strict';

describe('cartApp module', function() {
    beforeEach(module('cartApp', 'ngCookies'));
    var checkOutController;
    var $scope;
    describe('checkout controller', function(){

        beforeEach(angular.mock.inject(function(_$controller_, $rootScope){
            $scope = $rootScope.$new();
            checkOutController = _$controller_('checkOutController', {$scope:$scope});
        }));

        it('should inject controller', function() {
            expect(checkOutController).toBeDefined();
        });

    });
});