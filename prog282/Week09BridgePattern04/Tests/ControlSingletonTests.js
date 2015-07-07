/*globals describe:true, it:true, expect:true, define: true */

define(['Control'], function(Control) {
    'use strict';

    describe("Control Singleton Module Suite", function() {

        var a, b, c, d, f;
        
        beforeEach(function() {
            a = new Control();
            b = new Control();
            c = new Control();
            d = new Control();
            f = [];
        });
        
        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("proves we can run a sanity check that we expect to fail", function() {
            var e = {};
            expect(a === e).toBe(false);
        });
        
        it("proves we can create a Control01", function() {       
            expect(a === b).toBe(true);
        });

        it("proves we can create a Control02", function() {
            expect(a === c).toBe(true);
        });

        it("proves we can create a Control03", function() {
            
            expect(a === d).toBe(true);
        });
        
        it("proves we can create a Control04", function() {
            expect(b === c).toBe(true);
        });

        it("proves we can create a Control05", function() {
            expect(c === d).toBe(true);
        });

        it("proves we can run another sanity check", function() {
            expect(a === f).toBe(false);
        });

    });

});