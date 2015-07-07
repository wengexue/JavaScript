/**
 * Created by xuewenwen on 4/24/2015.
 */

(function() {

    var app = angular.module('elvenApp', []);

    app.factory('line', function(drawMachine) {
        return {
            detail: "line",
            draw: function(size) {
                drawMachine.setColor('blue');
                // Code for drawing lines left as exercise for the reader...
                drawMachine.drawLine(size.START_X,size.START_Y,size.START_X+size.WIDTH,size.START_Y+size.HEIGHT);
                drawMachine.drawLine(size.START_X,size.START_Y+size.HEIGHT,size.START_X+size.WIDTH,size.START_Y);
            }
        }
    });

    app.factory('rectangle', function(drawMachine) {
        return {
            detail: "rectangle",
            draw: function(size) {
                drawMachine.setColor('red');
                // Code for drawing lines left as exercise for the reader...
                drawMachine.drawRectangle(size.START_X,size.START_Y,size.WIDTH,size.HEIGHT);
            }
        }
    });

    app.controller('DrawController',
        function (drawMachine, line, rectangle) {
            var drawControl = this;
            var listData = [];
            listData.push(line.detail);
            listData.push(rectangle.detail);
            drawControl.shapeList = listData;
            drawControl.drawShape = function() {
                var shapeSize = {
                    START_X: 10,
                    START_Y: 10,
                    WIDTH: 280,
                    HEIGHT: 130
                };
                var myCanvas = document.getElementById('myCanvas');
                var context = myCanvas.getContext('2d');
                drawMachine.init(context);
                line.draw(shapeSize);
                // What line is missing here? The answer is left as an exercise for you know who....
                rectangle.draw(shapeSize);

            }
        });

})();