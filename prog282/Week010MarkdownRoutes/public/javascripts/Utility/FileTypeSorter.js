/**
 * FileTypeSorter
 */

define(function() {
    "use strict";
    var FileTypeSorter = (function() {

        function FileTypeSorter() {

        }

        var getExtension = function(fileName) {
            fileName = fileName.trim();
            var array = fileName.split(".");
            if (array.length === 1 || (array[0] === "" && array.length === 2)) {
                return "";
            }
            return array.pop().toLowerCase();
        };

        var getObjectType = function(options) {
            switch (options.currentExtension) {
                case 'json':
                    return options.readers[0];
                    //                    break;
                case 'md':
                    return options.readers[1];
                    //                    break;
                default:
                    return options.readers[0];
            }
        };

        FileTypeSorter.prototype.setFileName = function(options, event) {
            if (options.useDefaultFile) {
                options.fileName = options.defaultFileName;
            } else {
                options.fileName = event.target.attributes.data.value;
            }
            options.currentExtension = getExtension(options.fileName);
            options.objectType = getObjectType(options);
            return !options.useDefaultFile;
        };

        return FileTypeSorter;
    }());

    return FileTypeSorter;
});
