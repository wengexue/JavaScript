/*globals describe:true, it:true, expect:true, define: true */

define(['DefaultReader'], function(DefaultReader) {
    'use strict';

    describe("DefaultReader Singleton Module Suite", function() {

        var a, b, c, d, f;

        beforeEach(function() {
            a = new DefaultReader();
            b = new DefaultReader();
            c = new DefaultReader();
            d = new DefaultReader();
            f = [];
        });

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("proves we can run a sanity check that we expect to fail", function() {
            var e = {};
            expect(a === e).toBe(false);
        });

        it("proves we can create a DefaultReader01", function() {
            expect(a === b).toBe(true);
        });

        it("proves we can create a DefaultReader02", function() {
            expect(a === c).toBe(true);
        });

        it("proves we can create a DefaultReader03", function() {

            expect(a === d).toBe(true);
        });

        it("proves we can create a DefaultReader04", function() {
            expect(b === c).toBe(true);
        });

        it("proves we can create a DefaultReader05", function() {
            expect(c === d).toBe(true);
        });

        it("proves we can run another sanity check", function() {
            expect(a === f).toBe(false);
        });

    });

});
