if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["Reader"], function(Reader) {

    var FancyReader = (function() {
        
     
        
        function FancyReader(reader) {                        
            this.setReader(reader);
        }
        
        FancyReader.prototype = new Reader();
        
        FancyReader.prototype.getCurrentDocLength = function() {
        	var len = (this.reader.readFile()).length;
			return "This is the " + this.reader.getReaderType() + ". The length is " + len;
        };
        
        return FancyReader;
        
    }());
    
    

    return FancyReader;
}); 