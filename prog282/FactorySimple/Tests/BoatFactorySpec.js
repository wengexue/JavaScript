/*globals describe:true, it:true, expect:true, SailBoatFactory: true, Sloop: true */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["SailBoatFactory", "Sloop", "Yawl", "Ketch"], function(SailBoatFactory, Sloop, Yawl, Ketch) {'use strict';

// define([], function() {'use strict';
    describe("Simple Factory Suite", function() {
        
        //var SailBoatFactory = require('../Factory/SailBoatFactory');
        //var Sloop = require('../Factory/Sloop');
        //var Yawl = require('../Factory/Yawl'); 

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });
        
//////////////////////////////////////////////////////////////////        

        it("creates a sloop", function() {
            // Create an instance of our factory that makes boats
            var boatFactory = new SailBoatFactory();
            var sloop = boatFactory.createBoat({
                boatType : "sloop",
                color : "green",
                sails : 3
            });
            // Test to confirm our Sloop was created
            expect( sloop instanceof Sloop).toBe(true);
        });

        it("creates a green sloop", function() {
            // Create an instance of our factory that makes boats
            var boatFactory = new SailBoatFactory();
            var sloop = boatFactory.createBoat({
                boatType : "sloop",
                color : "green",
                sails : 3
            });
			// Test to confirm our Sloop was yellow
            expect(sloop.color).toBe('green');
        });

        it("shows that a sloop has a keel", function() {
            var boatFactory = new SailBoatFactory();
            var sloop = boatFactory.createBoat({
                boatType : "sloop",
                color : "green",
                sails : 3
            });
			// Test to confirm our Sloop has a keel
            expect(sloop.keel).toBe(true);
        });

/////////////////////////////////////////////////////////////

        it("creates a yawl", function() {
            var boatFactory = new SailBoatFactory();
            var yawl = boatFactory.createBoat({
                boatType : "yawl",
                color : "red",
                sails : 3
            });
            // Test to confirm our Yawl was created
            expect( yawl instanceof Yawl).toBe(true);
        });

        it("creates a red yawl", function() {
            var boatFactory = new SailBoatFactory();
            var yawl = boatFactory.createBoat({
                boatType : "yawl",
                color : "red",
                sails : 3
            });
			// Test to confirm our yawl was red
            expect(yawl.color).toBe("red");
        });



        it("shows that a yawl has a mizzen", function() {
            var boatFactory = new SailBoatFactory();
            var yawl = boatFactory.createBoat({
                boatType : "yawl",
                color : "red",
                sails : 3
            });
			// Test to confirm our yawl has a mizzen
            expect(yawl.mizzen).toBe(true);
        });

///////////////////////////////////////////////////////////////////

        it("creates a ketch", function() {
            var boatFactory = new SailBoatFactory();
            var ketch = boatFactory.createBoat({
                boatType : "ketch",
                color : "blue",
                sails : 3
            });
            // Test to confirm our Ketch was created
            expect( ketch instanceof Ketch).toBe(true);
        });

        it("creates a blue ketch", function() {
            // Create an instance of our factory that makes boats
            var boatFactory = new SailBoatFactory();
            var ketch = boatFactory.createBoat({
                boatType : "ketch",
                color : "blue",
                sails : 3
            });
			// Test to confirm our Ketch was blue
			expect(ketch.color).toBe("blue");
        });

        it("shows that a ketch has a topsail", function() {
            var boatFactory = new SailBoatFactory();
            var ketch = boatFactory.createBoat({
                boatType : "ketch",
                color : "blue",
                sails : 3
            });
			// Test to confirm our ketch has a topsail
            expect(ketch.topsail).toBe(true);
        });



    });

}); 
