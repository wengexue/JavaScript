define(["PagedownSetup", "Markdown", "Editor"],
    function(PagedownSetup, Markdown, Editor) {
        //'use strict';

        var MarkShow = (function() {
            var saveMarkdown;
            var converter;
            var inputText;

            function MarkShow() {
                $("#homepage").click(function() {
                    window.location.href = '/';
                });
                var pagedownSetup = new PagedownSetup();
                editor = pagedownSetup.setupConverter(Markdown);
                converter = editor.getConverter();

                inputText = $("#wmd-input-elf");
                inputText.html("This is the starter text with tweaked editor.\n\n- A\n- B\n");

                converter.hooks.chain("preConversion", function(text) {
                    saveMarkdown = text;
                    return text;
                });
            }

            MarkShow.prototype.getPick = function(event) {
                $.getJSON('/getPick', function(result) {
                    $("#sessionNumber").html("Session: " + result.sessionNumber);
                    console.log(JSON.stringify(result));
                    inputText.html(result.content);
                    editor.refreshPreview();
                });
            };

            return MarkShow;

        }());

        return MarkShow;
    });
