/**
 * Created by xuewenwen on 4/24/2015.
 */
(function() {

    angular.module('elvenApp')
        .factory('drawMachine', function() {

            var context;

            function Draw() {
            }

            Draw.prototype.init = function(contextInit) {
                context = contextInit;
                context.lineWidth = 1;
            };

            Draw.prototype.setColor = function(colorInit) {
                context.strokeStyle = colorInit;
            };

            Draw.prototype.drawRectangle = function(x, y, rectWidth, rectHeight) {
                context.strokeRect(x, y, rectWidth, rectHeight);
            };

            Draw.prototype.drawLine = function(x, y, x1, y1) {
                context.beginPath();
                context.moveTo(x, y);
                context.lineTo(x1, y1);
                context.closePath();
                context.stroke();
            };

            return new Draw();
        });

})();