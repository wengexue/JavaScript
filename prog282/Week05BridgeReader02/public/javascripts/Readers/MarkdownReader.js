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
        
		readFile : function(file) {'use strict';
            var text = "This is my document.";
	   		$("#documentShow").append(text);
        }
        
    };

    return MarkdownReader;
});

