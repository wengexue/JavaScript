define(["DisplayFactory"], 
    function(DisplayFactory) {
    'use strict';

    describe("Display Tests", function() {

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });
        
        it("proves we can create a DisplayFactory", function() {
            var displayFactory = new DisplayFactory();
            expect(displayFactory).toBeTruthy();
        });

    });
});