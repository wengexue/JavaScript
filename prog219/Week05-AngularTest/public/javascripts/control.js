/**
 * Created by charlie on 5/6/2015.
 */

(function() {
    var app = angular.module('elvenApp', []);

    app.controller('ElvenController', function($scope) {
        var elvenController = this;
        $scope.foo = "bar";
        elvenController.hint = "My hint.";

        elvenController.square = function(operand) {
            return operand*operand;
        };

        elvenController.add = function(operandA, operandB) {
            return operandA+operandB;
        };

    });

})();