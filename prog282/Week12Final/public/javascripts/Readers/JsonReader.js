define(['jquery', 'Utilities', 'DisplayFactory'],
    function(jquery, utilities, DisplayFactory) {
        'use strict';



        var JsonReader = (function() {

            var that;
            var _instance = null;

            function JsonReader() {
                if (_instance === null) {
                    _instance = this;
                    that = this;
                } else {
                    that = _instance;
                    return _instance;
                }
            }

            var clear = function() {
                $('#displayList').empty();
            };

            function nativeCallback(dataContent) {
                var serverData = dataContent;
                that.display(serverData);
            }

            // If the customCallback exists, then use it, else use ours nativeCallback. 
            // If there is an error handler, use it, else use our errorHandler
            function getCallback(customCallback) {
                var callback = utilities.isTruthy(customCallback) ? customCallback : nativeCallback;
                if (utilities.isFalsy(callback.error)) {
                    callback.error = utilities.errorHandler;
                }
                return callback;
            }

            JsonReader.prototype.readFile = function(fileName, customCallback) {
                var fileObject = {
                    'fileName': fileName
                };
                var callback = getCallback(customCallback);
                $.getJSON('/read', fileObject, callback);
            };

            JsonReader.prototype.display = function(serverData) {
                clear();
                var displayFactory = new DisplayFactory();
                var displayObject = displayFactory.create({
                    objectType: serverData.type
                });
                //displayObject.display(serverData.content);
                displayObject.display(serverData);
            };

            return JsonReader;

        }());

        return JsonReader;
    });
