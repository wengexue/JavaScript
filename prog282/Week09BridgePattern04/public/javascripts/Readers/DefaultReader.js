define(function(require) {'use strict';

    var DefaultReader = ( function() {

            var _instance = null;
            
            function DefaultReader() {
                if (_instance === null) {
                    _instance = this;
                } else {
                    return _instance;
                }
            }


            DefaultReader.prototype.readFile = function() {
                return "I'm the default reader";
            };

            DefaultReader.prototype.display = function() {
                var data = this.readFile();
                $("#display").text(data);
            };

            return DefaultReader;
        }());

    return DefaultReader;

}); 