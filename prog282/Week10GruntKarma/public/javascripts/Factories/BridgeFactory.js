define(['ReaderBridge', 'FancyReaderBridge'], function(ReaderBridge, FancyReaderBridge) {
    'use strict';

    // Define a SailBoat factory constructor function
    function BridgeFactory() {}

    BridgeFactory.prototype.product = {};

    // Create a Boat with this function
    BridgeFactory.prototype.create = function(options) {

        switch (options.objectType) {
            case "ReaderBridge":
                this.product = new ReaderBridge();
                break;
            case "FancyReaderBridge":
                this.product = new FancyReaderBridge();
                break;
            default:
                this.product = {};
        }

        return this.product;

    };

    return BridgeFactory;
});
