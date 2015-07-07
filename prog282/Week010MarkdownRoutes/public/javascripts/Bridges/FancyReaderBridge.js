define(["ReaderBridge"], function(ReaderBridge) {
    'use strict';

    var FancyReader = (function() {

        function FancyReader(reader) {
            this.setReader(reader);
        }

        FancyReader.prototype = new ReaderBridge();

        return FancyReader;
    }());

    return FancyReader;

});
