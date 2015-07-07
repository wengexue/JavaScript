define(["ReaderBridge", "DisplayMetaData"], function(ReaderBridge, DisplayMetaData) {
    'use strict';

    var FancyReader = (function() {

        function FancyReader(reader) {
            this.setReader(reader);
            $.subscribe('pageRefresh',displayData);
            
        }

        FancyReader.prototype = new ReaderBridge();

        var displayData = function(event, data) {
            var displaymeta = new DisplayMetaData();
            displaymeta.display(data.serverData);
        };

        return FancyReader;
    }());

    return FancyReader;

});


