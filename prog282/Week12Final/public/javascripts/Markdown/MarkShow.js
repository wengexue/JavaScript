define(["PagedownSetup", "Markdown", "Editor", "Utilities"],
    function(PagedownSetup, Markdown, Editor, utilities) {
        //'use strict';

        var MarkShow = (function() {
            var saveMarkdown;
            var converter;
            var inputText;
            var fileNameData;

            function MarkShow() {
                /*$("#homepage").click(function() {
                    window.location.href = '/';
                });*/
                $("#savePage").click(savePage);
                var pagedownSetup = new PagedownSetup();
                editor = pagedownSetup.setupConverter(Markdown);
                converter = editor.getConverter();

                inputText = $("#wmd-input-elf");
                fileNameData = $("#fileName");
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
                    fileNameData.html(result.userPick);
                    inputText.html(result.content);
                    editor.refreshPreview();
                });
            };

            var savePage = function() {
                $.ajax({
                    url: '/Markdown/savePage',
                    data: {
                        markdown: saveMarkdown,
                        html: converter.makeHtml(saveMarkdown),
                        fileName: fileNameData.html()
                    }
                }).error = utilities.errorHandler;

            };


            return MarkShow;

        }());

        return MarkShow;
    });
