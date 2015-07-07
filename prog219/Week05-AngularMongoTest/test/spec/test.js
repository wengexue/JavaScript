/*global describe, it */
'use strict';

(function() {
    'use strict';

    describe('Give it some context here', function() {

        var MyController, scope;
        var expect = chai.expect;

        beforeEach(module('elvenApp'));

        // Initialize the controller and a mock scope
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            MyController = $controller('MyController', {
                $scope: scope
            });
        }));

        it('should prove we loaded chai', function() {
            expect(true).to.equal(true);
        });

        it('should get a hint', function() {
            expect(scope.hint.length).to.equal(78);
        });

        it('should get a database hit', function() {
            scope.loadScientists();
            expect(scope.scientists[0].firstName).to.equal('Marie');
        });

    });



})();
