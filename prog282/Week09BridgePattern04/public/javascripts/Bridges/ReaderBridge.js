define(function(require) {
    'use strict';

    var Readers = (function() {

        function Readers(reader) {
            this.setReader(reader);
        }

        Readers.prototype.setReader = function(reader) {
            this.reader = reader;
        };

        Readers.prototype.readFile = function(fileName, customCallback) {
            return this.reader.readFile(fileName, customCallback);
        };

        Readers.prototype.display = function(serverData) {
            return this.reader.display(serverData);
        };

        return Readers;
    }());

    return Readers;
});