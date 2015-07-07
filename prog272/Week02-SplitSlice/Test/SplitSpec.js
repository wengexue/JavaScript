/**
 * Created by charliecalvert on 1/13/15.
 */
var splits = require('../Source/Splits.js').splits;
var chai = require("chai");
var expect = chai.expect;

/**
 * Learn about String.split
 * @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */
describe('Split Tests', function () {
    'use strict';

    describe('Basic splits', function () {

        it('proves the function handles a dash delimted string', function () {
            var testString = 'one-two-three';
            var result = splits.splitOnDash(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves the function handles a semicolon delimited string ', function () {
            var testString = 'one;two;three';
            var result = splits.splitOnSemicolon(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves the function handles a tab delimited string ', function () {
            var testString = 'one\ttwo\tthree';
            var result = splits.splitOnTab(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves the function handles a new line delimited string ', function () {
            var testString = 'one\ntwo\nthree';
            var result = splits.splitOnNewLine(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves the function handles a comma delimited string', function () {
            var testString = 'one,two,three';
            var result = splits.splitOnComma(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves we can reverse a string with String.split, Array.reverse and Array.join', function() {
            var testString = "bat";
            var result = splits.reverseString(testString);
            //console.log(result);
            expect(result).to.equal('tab');
        });

    });

    describe('Splits with spaces', function () {

        it('proves the function handles a comma delimited string with spaces in it', function () {
            var testString = 'one, two, three';
            var result = splits.splitOnCommaWithSpace01(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

        it('proves the function handles a comma delimited string with spaces in it', function () {
            var testString = 'one, two, three';
            var result = splits.splitOnCommaWithSpace02(testString);
            expect(result[0]).to.equal('one');
            expect(result[1]).to.equal('two');
            expect(result[2]).to.equal('three');
        });

    });

});
