/**
 * @author Charlie Calvert
 */

define([ 'Control',"Position", "FeetToMiles", "HoursToSeconds", "FahrenheitToCelsius", "Multiply", "Add", "GetNine", "DirName", "Hello" ], function(Control, Position, FeetToMiles, HoursToSeconds, FahrenheitToCelsius, Multiply, Add, GetNine, DirName, Hello) {
    'use strict';

    var Factory = (function() {

        function Factory() {
        }

        // Our factories product is an empty object by default
        Factory.prototype.product = { 'error': 'The factory created nothing' };

        // Create a products
        Factory.prototype.create = function(options) {

            switch (options.productType) {
            case "Control":
                this.product = new Control(this);
                break;
            case "Hello":
                this.product = new Hello();
                break;
            case "DirName": 
                this.product = new DirName();
                break;
            case "GetNine": 
                this.product = new GetNine();
                break;
            case "Add": 
                this.product = new Add();
                break;
            case "Multiply": 
                this.product = new Multiply();
                break;
            case "FeetToMiles": 
                this.product = new FeetToMiles();
                break;
            case "HoursToSeconds": 
                this.product = new HoursToSeconds();
                break;
            case "FahrenheitToCelsius": 
                this.product = new FahrenheitToCelsius();
                break;
            case "Position": 
                this.product = new Position();
                break;
            default:
                console.log("Returning default object.");
            }

            return this.product;

        };

        return Factory;
    }());

    return Factory;
});