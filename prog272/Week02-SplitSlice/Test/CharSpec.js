var assert = require("assert");
var chars = require('../Source/Chars.js').chars;
var chai = require("chai");
var expect = chai.expect;

describe('Test Characters', function () {
    'use strict';

    describe('array.indexOf', function () {

        it('should return -1 when the value is not present', function () {
            expect([1, 2, 3].indexOf(5)).to.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.equal(-1);
        });

        it('should return the index when the value is present', function () {
            assert.equal(0, [1, 2, 3].indexOf(1));
            assert.equal(2, [1, 2, 3].indexOf(3));
        });
    });

    describe("characters", function() {
        it('proves the function returns a comma', function () {
            expect(chars.getComma()).to.equal(',');
        });

        it('proves the function returns a tab', function () {
            expect(chars.getTab()).to.equal('\t');
        });

        it('proves the function returns a new line', function () {
            expect(chars.getNewLine()).to.equal('\n');
        });

        it('proves the function returns a double quote', function () {
            expect(chars.getDoubleQuote()).to.equal('"');
        });

        it('proves the function returns a hyphen', function () {
            expect(chars.getHyphen()).to.equal('-');
        });

    });

});
