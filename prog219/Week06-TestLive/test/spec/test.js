/**
 * @author Charlie Calvert
 */

(function () {

    'use strict';


    describe('Integration Tests', function () {

        var myController, scope;
        var $httpBackend = null;

        beforeEach(function () {
            module('elvenApp');
        });

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            myController = $controller('MyController', {
                $scope: scope
            });
        }));

        beforeEach(inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should prove we loaded jasmine', function () {
            expect(true).toBe(true);
        });

        it('should get a hint', function () {
            expect(myController.hint.length).toBe(3);
        });

        it("Test load json hitPoints", function () {
            $httpBackend.expectGET('./data.json').respond({
                "name": "NPC01",
                "hitPoints": 37,
                "damage": 5
            });
            myController.loadJson('./data.json');
            $httpBackend.flush();
            expect(myController.data.hitPoints).toEqual(37);
        });
    });
})();