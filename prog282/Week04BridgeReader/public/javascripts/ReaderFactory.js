/**
 * @author Charlie Calvert
 * 
 * Create Boats
 * 
 * See http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/
 */


if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    var JsonReader = require("JsonReader");
    var MarkdownReader = require("MarkdownReader");

        
    // Define a Reader factory constructor function
    function ReaderFactory() {}
    
    // By default we create JsonReader
    ReaderFactory.prototype.readerClass = JsonReader;
    
    // Create a Reader with this function
    ReaderFactory.prototype.createReader = function(options) {
        'use strict';
    
        switch (options.readerType) {
            case "json":
                this.readerClass = JsonReader;
                break;
            case "markdown":
                this.readerClass = MarkdownReader;
                break;
            default:
                this.readerClass = JsonReader;
        }
        return new this.readerClass(options);
    
    };
    
    return ReaderFactory;
});