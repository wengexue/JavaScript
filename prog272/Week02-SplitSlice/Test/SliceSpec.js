/**
 * Created by charliecalvert on 1/13/15.
 */

var chai = require("chai");
var expect = chai.expect;

var slices = require('../Source/Slices.js').stringSlices;

/**
 * @description: Learn about String.slice
 * @reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 */
describe('Slice', function () {
    'use strict';

    console.log(slices);

    it('proves we can get the first three characters from a string', function () {
        var testString = 'This big string';
        var result = slices.getFirstThreeCharacters(testString);
        expect(result).to.equal('Thi');
    });

    // You need only one parameter to slice to make this work.
    it('proves we can get the last three characters from this big string', function () {
        var testString = 'This big string';
        var result = slices.getLastThreeCharacters(testString);
        expect(result).to.equal('ing');
    });

    it('proves we can get the middle three characters from a string', function () {
        var testString = 'string big string';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('big');
    });

    it('proves we can get the middle three characters from fun big and', function () {
        var testString = 'fun big and';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('big');
    });

    it('proves we can get the middle three characters from candy', function () {
        var testString = 'candy';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('and');
    });

    it('proves we get last three characters from four character string', function () {
        var testString = 'cand';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('and');
    });

    it('proves we can get the middle three characters from a phil smythson', function () {
        var testString = 'phil smythson';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('smy');
    });

    it('proves we get original string if string less than three characters', function () {
        var testString = 'am';
        var result = slices.getMiddleThreeCharacters(testString);
        expect(result).to.equal('am');
    });

    it('proves we can get all but the but first and last character from a string', function () {
        var testString = '*rainy nights*';
        var result = slices.getAllButFirstAndLast(testString);
        expect(result).to.equal('rainy nights');
    });

    it('proves we can get all but the but first and last character from a string if both first and last are the same', function () {
        var testString = '*rainy nights*';
        var result = slices.getAllButFirstAndLastIfSame(testString);
        expect(result).to.equal('rainy nights');
    });

    it('proves getAllButFirstAndLast returns original string if first and last are different', function () {
        var testString = '*rainy nights%';
        var result = slices.getAllButFirstAndLastIfSame(testString);
        expect(result).to.equal('*rainy nights%');
    });

});