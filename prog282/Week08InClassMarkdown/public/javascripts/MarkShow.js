define(["PagedownSetup", "Markdown", "Editor"], 
    function(PagedownSetup, Markdown, Editor) {
    
    
    var MarkShow = (function() {

        var saveMarkdown;
        var converter;

        function MarkShow() {
            var pagedownSetup = new PagedownSetup();
            converter = pagedownSetup.setupConverter(Markdown);
            
            var inputText = $("#wmd-input-elf");
            inputText.html("This is the starter text with tweaked editor.\n\n- A\n- B\n");
            
            converter.hooks.chain("preConversion", function(text) {
                saveMarkdown = text;
                return text;
            });
        }

        return MarkShow;
        
    }());
    
    return MarkShow;
});