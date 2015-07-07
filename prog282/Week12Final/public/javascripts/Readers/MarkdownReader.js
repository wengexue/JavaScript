define(function(require) {
    'use strict';

    var MarkdownReader = (function() {

        var _instance = null;

        function MarkdownReader() {
            if (_instance === null) {
                _instance = this;
            } else {
                return _instance;
            }

        }

        MarkdownReader.prototype.readFile = function(fileName, customCallback) {
            $.getJSON('/setPick', {
                pick: fileName
            }, function(result) {
                if (result.result !== "success") {
                    throw "Error";
                }
                window.location.href = '/Markdown';
            }).error = function(f, a, b) {
                alert(f);
            };
        };

        MarkdownReader.prototype.display = function(data) {
            var text = JSON.stringify(data, null, 4);
            $("#display").text(text);
            //$("#wmd-input-elf").text(text);
        };

        return MarkdownReader;
    }());

    return MarkdownReader;
});
