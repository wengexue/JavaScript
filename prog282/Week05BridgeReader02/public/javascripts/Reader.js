/**
 * @author Charlie Calvert
 */

define(function(require) {'use strict';

    var Reader = (function() {
    
        function Reader(reader) {
            this.setReader(reader);
        }
        
        Reader.prototype.setReader = function(reader) {
            this.reader = reader;
        };
        
        Reader.prototype.readFile = function(fileName) {
            return this.reader.readFile(fileName);
        };
               
         Reader.prototype.display = function() {
            return this.reader.display();
        };

 
        return Reader;
    }());

    return Reader;
}); 