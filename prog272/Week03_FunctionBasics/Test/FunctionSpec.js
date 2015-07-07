var chai = require("chai");
var expect = chai.expect;


describe("Function Basics with Require", function () {
    'use strict';
    var myFunction, myFunctionSimple;

    before(function () {
        var getFunction = require('../Source/GetFunction');
        myFunction = new getFunction.MyFunction();
    });

    it("proves true is true", function () {
        expect(true).to.equal(true);
    });

    it("proves myFunction is a function", function () {
        expect(typeof myFunction).to.equal('object');
    });

    it("checks the constructor to see if called with new or not", function () {
        expect(myFunction.constructor.name).to.equal("MyFunction");
        expect(myFunction.constructor.toString()).to.equal("function MyFunction() { }");
    });

    it("Checks nothing is escaping to the global name space from myFunctionSimple", function() {
        expect(global.foo).to.be.ok();
        expect(global.bar).to.not.be.ok();
    });

    it("shows myFunction has three methods", function () {
        var methods = [];
        for (var n in myFunction) {
            if (typeof myFunction[n] === 'function') {
                methods.push(n);
            }
        }
        expect(methods.length).to.equal(3);
    });

    it("shows myFunction has two numeric properties", function () {
        var methods = [];
        for (var n in myFunction) {
            if (typeof myFunction[n] === 'number') {
                methods.push(n);
            }
        }
        expect(methods.length).to.equal(2);
    });

    it("shows myFunction has one string property", function () {
        var strings = [];
        for (var n in myFunction) {
            if (typeof myFunction[n] === 'string') {
                strings.push(n);
            }
        }
        expect(strings.length).to.equal(1);
    });
});
