/**
 * New node file
 */

if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([ 'jquery', 'Utilities', 'MarkShow'], function(jquery, utilities, MarkShow)  {
    
    var that;
    var MarkdownReader = function(options) {
    	'use strict';
		this.readerType = options.readerType;
		that = this;
    };

	function nativeCallback(fileList) {
		var serverData = fileList;
		that.display(serverData);
	}

	// If the customCallback exists, then use it, else use ours nativeCallback
	// If there is an error handler, use it, else use our errorHandler
	function getCallback(customCallback) {
		var callback = utilities.isTruthy(customCallback) ? customCallback
				: nativeCallback;
		if (utilities.isFalsy(callback.error)) {
			callback.error = utilities.errorHandler;
		}
		return callback;
	}


    MarkdownReader.prototype = {
        getReaderType: function() {'use strict';
            return options.readerType;
        },
        
		readFile : function(fileName, customCallback) {'use strict';
			var fileObject = {
				'fileName' : fileName
			};
			var callback = getCallback(customCallback);
			$.get('/readMarkdown', fileObject, callback);
       },

		display : function(serverData) {'use strict';
			$("#wmd-input-elf").html(serverData);
        }

    };

    return MarkdownReader;
});

