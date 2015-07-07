define(function(require) {'use strict';

    var MarkdownReader = ( function() {

            var _instance = null;
            
            function MarkdownReader() {
                if (_instance === null) {
                    _instance = this;
                } else {
                    return _instance;
                }

            }

            MarkdownReader.prototype.readFile = function() {
                this.display("#Title\n- Item01\n- Item02");             
            };

            MarkdownReader.prototype.display = function(data) {             
                var text = JSON.stringify(data, null, 4);
                $("#display").text(text);
            };

            return MarkdownReader;
        }());

    return MarkdownReader;
});