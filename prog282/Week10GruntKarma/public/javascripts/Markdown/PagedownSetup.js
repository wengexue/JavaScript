define(function() {
    "use strict";
    var PagedownSetup = (function() {

        function PagedownSetup() {

        }

        PagedownSetup.prototype.setupConverter = function(Markdown) {

            var converter = new Markdown.Converter();

            converter.hooks.chain("preConversion", function(text) {
                return text.replace(/((\b)(the|with)(\b))/gi, "**$1**");
            });

            var help = function() {
                alert("Do you need help?");
            };
            var options = {
                helpButton: {
                    handler: help
                },
                strings: {
                    quoteexample: "whatever you're quoting, put it right here"
                }
            };

            var editor = new Markdown.Editor(converter, "-elf", options);
            editor.run();

            return editor;
        };

        return PagedownSetup;

    }());

    return PagedownSetup;

});
