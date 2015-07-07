/**
 * Created by charlie on 5/11/2015.
 */

/**
 * @author Charlie Calvert
 */

(function () {

    'use strict';


    describe('Science Facade Tests', function () {

        var scienceFacade;
        var $httpBackend = null;

        function isArray(itemToCheck) {
            return Object.prototype.toString.call(itemToCheck) === '[object Array]';
        }

        beforeEach(function () {
            module('elvenApp');
        });

        // Initialize the controller and a mock scope
        beforeEach(inject(function (_ScienceFacade_) {
            scienceFacade = _ScienceFacade_;
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
            expect(scienceFacade.hint.length).toBe(13);
        });

        it('should show hit is to be ScienceFacade', function () {
            expect(scienceFacade.hint).toEqual("ScienceFacade");
        });

        it('should show that we can call getall()', function () {
            var result = scienceFacade.getAll();
            //expect(isArray(result)).toBe(true);
            expect(result.length).toBe(3);
        });

        it('should show that we can call getTopic()', function () {
            var result = scienceFacade.getTopic();
            expect(isArray(result)).toBe(true);
        });

        it('should show that we can call getSubtopicsFromTopic()', function () {
            var result = scienceFacade.getSubtopicsFromTopic();
            expect(isArray(result)).toBe(true);
        });

        it('should show that we can call delete() and get a number', function () {
            var result = scienceFacade.delete();
            expect(typeof(result)).toBe('number');
        });

        it('should show that we can call add() and get a number', function () {
            var result = scienceFacade.add();
            expect(typeof(result)).toBe('number');
        });
        it('should show that we can call update() and get a boolean', function () {
            var result = scienceFacade.update();
            expect(typeof(result)).toBe('boolean');
        });
    });
})();