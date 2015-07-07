//define(['jquery', 'ReaderFactory', 'PagedownSetup', 'Markdown', 'Editor', 'Reader', 'MarkdownReader', 'SaveFile'], 
//    function(jq, ReaderFactory, PagedownSetup, Markdown, Editor, Reader, MarkdownReader, SaveFile) {
define(['jquery', 'ReaderFactory'], 
  function(jq, ReaderFactory) {
   
    
    var MarkShow = (function() {

        var saveMarkdown;
        var converter;
		
        function MarkShow() {
            /*var pagedownSetup = new PagedownSetup();
            converter = pagedownSetup.setupConverter(Markdown);
            
            var inputText = $("#wmd-input-elf");
            inputText.html("This is the starter text with tweaked editor.\n\n- A\n- B\n");
            
            converter.hooks.chain("preConversion", function(text) {
                saveMarkdown = text;
                return text;
            });

            $("#loadfile").click(loadFile);
            $("#savefile").click(saveFile); */
        }
        
        var loadFile = function(){
        	var fileName = "Data/MyMarkdownData.md";
			var readerfactory = new ReaderFactory();
			var readerclass = readerfactory.createReader({readerType:"markdown"});
			var reader = new Reader(readerclass);
			reader.readFile(fileName);
       };
        
        var saveFile = function(){
        	var fileName = "Data/MyMarkdownData.md";
        	var savefile = new SaveFile();
        	savefile.saveToDb(fileName);
        	savefile.saveToHtml(fileName);
        };

        return MarkShow;
        
    }());
    
    return MarkShow;
});