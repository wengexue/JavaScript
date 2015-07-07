define(function(require) {

    var utilities = {

        errorHandler : function(fx, status, error) {
            $('#debug01').html(fx.responseText);
            $('#debug02').html('error' + error);
        },

        isTruthy : function(value) {
            if (value === false) {
                return value;
            } else if (value === null) {
                return false;
            } else if (typeof value === 'undefined') {
                return false;
            } else {
                return true;
            }
        },

        isFalsy : function(value) {
            return this.isTruthy(value) ? false : true;
        },
        
        displayOptions:  function(options) {
            $('#debug01').html("Type: " + options.objectType);
            $('#debug02').html("File: " + options.fileName);
        },
        
        setClick: function(func) {
            $("#displayList").off('click');
            $("#displayList").click(func);
        },
        
        setFileName: function(options, event) {
            if (options.useDefaultFile) {
                options.fileName = options.defaultFileName;
            } else {
                options.fileName = event.target.attributes.data.value;
            }           
            options.objectType = options.readers[0];
            return !options.useDefaultFile;
        }
    };

    return utilities;
    
});