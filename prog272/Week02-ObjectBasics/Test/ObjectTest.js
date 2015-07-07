var chai = require('chai');
var expect = chai.expect;
var myObject = require('../Source/MyObject').myObject;

describe('Require Js Test Suites', function() {
	'use strict';
	
    describe("Object Basics with Require", function() {
    	
    	it("proves true is true", function() {
        	expect(true).to.equal(true);
        });
    	
        it("proves myObject is an object", function() {
        	expect(typeof myObject).to.equal('object');
        });
        
        it("shows myObject is not a function object", function () {            
            var isFunction = (typeof myObject !== 'function') && (typeof myObject !== 'object');
            expect(isFunction).to.equal(false);
        });
        
        it("shows myObject has three methods", function() {
        	var methods = [];
        	for (var n in myObject) {
        		if (typeof myObject[n] === 'function') {
        			methods.push(n);
        		}
        	}
        	expect(methods.length).equal(3);
        });
        
        it("shows myObject has two numeric properties", function() {
        	var methods = [];
        	for (var n in myObject) {
        		if (typeof myObject[n] === 'number') {
        			methods.push(n);
        		}
        	}
        	expect(methods.length).equal(2);
        });
        
        it("shows myObject has one string property", function() {
        	var strings = [];
        	for (var n in myObject) {
        		if (typeof myObject[n] === 'string') {
        			strings.push(n);
        		}
        	}
        	expect(strings.length).equal(1);
        });         
    });
});
