/*global describe, it */
'use strict';

(function () {

    'use strict';

    var elvenController, scope;

    describe('Integration Tests', function() {

        beforeEach(module('elvenApp'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            elvenController = $controller('ElvenController', {
                $scope: scope
            });
        }));

        it('should prove we loaded chai', function() {
            expect(true).toBe(true);
        });

        it('should get a hint', function() {
            expect(elvenController.hint.length).toBe(8);
        });

        it('should get a foo', function() {
            expect(scope.foo).toBe("bar");
        });

        it('should square 5 get 25', function() {
            expect(elvenController.square(5)).toBe(25);
        });

        it('should add 3 and 2 amd get 5', function() {
            expect(elvenController.add(3,2)).toBe(5);
        });

    });
})();
