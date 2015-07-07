/*globals describe:true, it:true, expect:true, define: true */

define(['JsonReader'], function(JsonReader) {
    'use strict';

    describe("JsonReader Singleton Module Suite", function() {

        var a, b, c, d, f;

        beforeEach(function() {
            a = new JsonReader();
            b = new JsonReader();
            c = new JsonReader();
            d = new JsonReader();
            f = [];
        });

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("proves we can run a sanity check that we expect to fail", function() {
            var e = {};
            expect(a === e).toBe(false);
        });

        it("proves we can create a JsonReader01", function() {
            expect(a === b).toBe(true);
        });

        it("proves we can create a JsonReader02", function() {
            expect(a === c).toBe(true);
        });

        it("proves we can create a JsonReader03", function() {

            expect(a === d).toBe(true);
        });

        it("proves we can create a JsonReader04", function() {
            expect(b === c).toBe(true);
        });

        it("proves we can create a JsonReader05", function() {
            expect(c === d).toBe(true);
        });

        it("proves we can run another sanity check", function() {
            expect(a === f).toBe(false);
        });

    });

});
