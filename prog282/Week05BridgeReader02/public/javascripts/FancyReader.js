if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(["Reader"], function(Reader) {

    var FancyReader = (function() {
        
     
        
        function FancyReader(reader) {                        
            this.setReader(reader);
        }
        
        FancyReader.prototype = new Reader();
        
        FancyReader.prototype.getCurrentDocLength = function(file) {
//        	var len = (this.reader.readFile(file).toString()).length;
			var text = "This is from fancy reader. Current reader is " + this.reader.getReaderType();
			$("#documentShow").append(text);
        };
        
        return FancyReader;
        
    }());
    
    

    return FancyReader;
}); 