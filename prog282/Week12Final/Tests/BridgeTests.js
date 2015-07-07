/**
 * @author Charlie Calvert
 */

define(["BridgeFactory", "ReaderBridge", "FancyReaderBridge"],
    function(BridgeFactory, ReaderBridge, FancyReaderBridge) {
        'use strict';

        describe("Bridge Tests", function() {

            it("proves we can run a test", function() {
                expect(true).toBe(true);
            });

            it("proves we can create a BridgeFactory, ReaderBridge and FancyReaderBridge", function() {
                expect(BridgeFactory).toBeTruthy();
                expect(ReaderBridge).toBeTruthy();
                expect(FancyReaderBridge).toBeTruthy();
            });

        });
    });
