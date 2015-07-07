/**
 * Created by charlie on 5/11/2015.
 */

/**
 * @author Charlie Calvert
 */

(function() {

    'use strict';

    describe('Science Facade Suite', function() {

        describe('Basic Tests', function() {

            var scienceFacade;

            function isArray(itemToCheck) {
                return Object.prototype.toString.call(itemToCheck) === '[object Array]';
            }

            beforeEach(function() {
                module('Science');
                module('elvenApp');
            });

            // Initialize the controller and a mock scope
            beforeEach(inject(function(_scientists_) {
                scienceFacade = _scientists_;
            }));


            it('should prove we loaded jasmine', function() {
                expect(true).toBe(true);
            });

            it('should get a hint', function() {
                expect(scienceFacade.hint.length).toBe(13);
            });

            it('should show that ScienceFacade.hint is equal to the string ScienceFacade', function() {
                expect(scienceFacade.hint).toEqual('ScienceFacade');
            });

            it('should show that we can call getAll() and get an array', function() {
                var result = scienceFacade.query();
                expect(isArray(result)).toBe(true);
            });

            it('should prove we can get an array from getTopic', function() {
                var result = scienceFacade.getTopic("Marie", function(result) {
                    expect(isArray(result)).toBe(true);
                });
            });

            it('should prove we can get an array from getSubtopicsFromTopic', function() {
                var result = scienceFacade.getSubtopicsFromTopic();
                expect(isArray(result)).toBe(true);
            });

            it('should prove remove returns a number', function() {
                var items = scienceFacade.query();
                var result = items[0].remove();
                expect(typeof result).toBe('number');
            });

            it('should prove add returns a number', function() {
                var newData = {
                    "firstName": "Frank",
                    "lastName": "Jones",
                    "genre": "Radioactivity"
                };

                var items = scienceFacade.query();
                var result = items[0].add(newData);
                expect(typeof result).toBe('number');
            });

            it('should prove update returns a boolean', function() {
                var items = scienceFacade.query();
                var result = items[0].updateDocument();
                expect(typeof result).toBe('boolean');
            });
        });

        describe("SimpleScience Data Tests", function() {
            var scienceFacade;

            function isArray(itemToCheck) {
                return Object.prototype.toString.call(itemToCheck) === '[object Array]';
            }

            beforeEach(function() {
                module('elvenApp');
            });

            beforeEach(inject(function(_scientists_) {
                scienceFacade = _scientists_;
            }));

            it('should prove we get three records', function() {
                var result = scienceFacade.query();
                expect(result.length).toEqual(3);
            });

        });
    });
})();