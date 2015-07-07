/**
 * New node file
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    
    var MarkdownReader = function(options) {'use strict';
		this.readerType = options.readerType;
    };

    MarkdownReader.prototype = {
        getReaderType: function() {'use strict';
            return options.readerType;
        },
        
		readFile : function() {'use strict';
            var text = "This is my document.";
	   		return text;
        }
        
    };

    return MarkdownReader;
});

