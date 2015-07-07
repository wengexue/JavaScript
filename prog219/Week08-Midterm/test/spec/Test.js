(function () {

    'use strict';

    var elvenController, scope;

    describe('Integration Tests', function () {

        describe('Basic Tests', function () {

            var musicFacade;

            function isArray(itemToCheck) {
                return Object.prototype.toString.call(itemToCheck) === '[object Array]';
            }

            beforeEach(function() {
                module('Music');
                module('elfApp');
            });

            beforeEach(inject(function(_musicians_) {
                musicFacade = _musicians_;
            }));


            var $httpBackend = null;

            beforeEach(inject(function (_$httpBackend_) {
                $httpBackend = _$httpBackend_;
            }));

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });

            // Initialize the controller and a mock scope
            beforeEach(inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                elvenController = $controller('MyController', {
                    $scope: scope
                });
            }));

            it('should prove we loaded Jasmine', function () {
                expect(true).toBe(true);
            });

            it('should get a hint', function () {
                expect(elvenController.hint.length).toBe(12);
            });

            it('should show that MusicFacade.hint is equal to the string MusicFacade', function() {
                expect(musicFacade.hint).toEqual('MusicFacade');
            });

            it('should show that we can call loadMusicians() and get an array', function() {
                var result = musicFacade.query();
                expect(isArray(result)).toBe(true);
            });

            it('should prove we can get an array from getTopic', function() {
                var result = musicFacade.getTopic("Marie", function(result) {
                    expect(isArray(result)).toBe(true);
                });
            });

            it('should prove remove returns a number', function() {
                var items = musicFacade.query();
                var result = items[0].remove();
                expect(typeof result).toBe('number');
            });

            it('should prove add returns a number', function() {
                var newData = {
                    "firstName": "Professor",
                    "lastName": "Longhair",
                    "genre": "Blues"
                };

                var items = musicFacade.query();
                var result = items[0].add(newData);
                expect(typeof result).toBe('number');
            });

            it('should prove update returns a boolean', function() {
                var items = musicFacade.query();
                var result = items[0].updateDocument();
                expect(typeof result).toBe('boolean');
            });

            /*
            it('should get a hint from the input control', function() {
             var hint = $("#hint").val();
             expect(hint.length).toBe(12);
             });
             */

            /*
             it('should set and get a hint', function() {
             var save = $("#hint").val();
             var testData = 'This is test data';
             elvenController.hint = testData;
             var newValue = $("#hint").val();
             expect(newValue).toBe(testData.length);
             $("#hint").val(save);
             }); */


            it("Test load json hitPoints", function () {
                var url = './data.json';
                $httpBackend.expectGET(url).respond({
                    "name": "NPC01",
                    "hitPoints": 37,
                    "damage": 5
                });
                elvenController.loadJson(url);
                $httpBackend.flush();
                expect(elvenController.data.hitPoints).toEqual(37);
            });

            /*
             it("shows we can get marie", function() {
             var maries = elvenController.getBeethoven();
             expect(maries[0].firstName).toEqual('Marie');
             }); */
        });

        describe("SimpleMusic Data Tests", function() {
            var musicFacade;

            function isArray(itemToCheck) {
                return Object.prototype.toString.call(itemToCheck) === '[object Array]';
            }

            beforeEach(function() {
                module('elfApp');
            });

            beforeEach(inject(function(_musicians_) {
                musicFacade = _musicians_;
            }));

            it('should prove we get six records', function() {
                var result = musicFacade.query();
                expect(result.length).toEqual(6);
            });

        });

    });

})();