/**
 * New node file
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {

    var JsonReader = function(options) {'use strict';
		this.readerType = options.readerType;
    };

    JsonReader.prototype = {
    
        getReaderType: function() {'use strict';
 //           return options.readerType;
 			return this.readerType;
        },

		readFile : function() {'use strict';
            var data = [{"firstName": "George", "lastName": "Washington"}, 
            		{"firstName": "John", "lastName": "Adams"},
	   				{"firstName": "Thomas", "lastName": "Jefferson"}];
//	   		var fileparse = JSON.parse(file);
			var text = "";
			for (var i in data){
				text += data[i].firstName + " " + data[i].lastName +",  ";
			}
	   		return text;
        }


    };
    
    return JsonReader;
});
