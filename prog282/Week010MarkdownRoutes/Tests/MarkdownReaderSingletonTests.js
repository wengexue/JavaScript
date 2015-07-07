/*globals describe:true, it:true, expect:true, define: true */

define(['MarkdownReader'], function(MarkdownReader) {
    'use strict';

    describe("MarkdownReader Singleton Module Suite", function() {

        var a, b, c, d, f;

        beforeEach(function() {
            a = new MarkdownReader();
            b = new MarkdownReader();
            c = new MarkdownReader();
            d = new MarkdownReader();
            f = [];
        });

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("proves we can run a sanity check that we expect to fail", function() {
            var e = {};
            expect(a === e).toBe(false);
        });

        it("proves we can create a MarkdownReader01", function() {
            expect(a === b).toBe(true);
        });

        it("proves we can create a MarkdownReader02", function() {
            expect(a === c).toBe(true);
        });

        it("proves we can create a MarkdownReader03", function() {

            expect(a === d).toBe(true);
        });

        it("proves we can create a MarkdownReader04", function() {
            expect(b === c).toBe(true);
        });

        it("proves we can create a MarkdownReader05", function() {
            expect(c === d).toBe(true);
        });

        it("proves we can run another sanity check", function() {
            expect(a === f).toBe(false);
        });

    });

});
