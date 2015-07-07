/**
 * Created by xuewenwen on 4/22/2015.
 */

(function() {

    var app = angular.module('elvenApp', []);

    app.factory('shape',
        function () {
            return {detail: "I am a shape."};
        });

    app.factory('line',
        function () {
            return {detail: "I am a line."};
        });

    app.controller('DrawController',
        function ($scope,shape, line) {
            var drawControl = this;
            drawControl.simple = "Simple Draw";
            drawControl.shape = shape.detail;
            drawControl.line = line.detail;
        });

})();