/**
 * New node file
 */
/*
if ( typeof define !== 'function') {
    var define = require('amdefine')(module);
}
*/
define([ 'jquery', 'Utilities', 'DisplayFileList', 'DisplayAddress' ], 
		function(jquery, utilities, DisplayFileList, DisplayAddress) {

	var that;
    var JsonReader = function(options) {'use strict';
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

    JsonReader.prototype = {
    
        getReaderType: function() {'use strict';
 //           return options.readerType;
 			return this.readerType;
        },

		readFile : function(fileName, customCallback) {'use strict';
			var fileObject = {
				'fileName' : fileName
			};
			var callback = getCallback(customCallback);
			$.getJSON('/read', fileObject, callback);
        },
        
		display : function(serverData) {'use strict';
            if (serverData.type === 'fileList') {
				var displayFileList = new DisplayFileList();
				displayFileList.display(serverData.content);
			}
            if (serverData.type === 'Address') {
				var displayAddress = new DisplayAddress();
				displayAddress.display(serverData.content);
			}
        }

    };
    
    return JsonReader;
});
