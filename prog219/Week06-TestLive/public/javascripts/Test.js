(function () {

    'use strict';

    var elvenController, scope;

    describe('Integration Tests', function() {

        beforeEach(module('elvenApp'));

        var $httpBackend = null;

        beforeEach(inject(function(_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            elvenController = $controller('MyController', {
                $scope: scope
            });
        }));

        it('should prove we loaded chai', function() {
            expect(true).toBe(true);
        });

        it('should get a hint', function() {
            expect(elvenController.hint.length).toBe(3);
        });


        it('should get a hint from the input control', function() {
            var hint = $("#hint").val();
            expect(hint.length).toBe(3);
        });

        it('should set and get a hint', function() {
            var save = $("#hint").val();
            var testData = 'This is test data';
            $("#hint").val(testData);
            expect(elvenController.hint.length).toBe(testData.length);
            $("#hint").val(save);
        });


        it("Test load json hitPoints", function() {
            var url = './data.json';
            $httpBackend.expectGET(url).respond({
                "name": "NPC01",
                "hitPoints": 37,
                "damage": 5});
            elvenController.loadJson(url);
            $httpBackend.flush();
            expect(elvenController.data.hitPoints).toEqual(37);
        });
    });
})();