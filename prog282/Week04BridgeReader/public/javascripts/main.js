/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        "JsonReader" : 'Readers/JsonReader',
        "MarkdownReader" : 'Readers/MarkdownReader',
        "jquery" : 'jquery-2.1.0.min'
    }
});

require(['jquery', 'ReaderFactory', 'Reader', 'FancyReader', 'JsonReader', 'MarkdownReader'], 
    function(jq, ReaderFactory, Reader, FancyReader, JsonReader, MarkdownReader) {

	var readerfactory = new ReaderFactory();
    
	$("#readerjson").click(function() {
		var readerclass = readerfactory.createReader({readerType:"json"});
		runReader(new Reader(readerclass));
	});
                
	$("#readermarkdown").click(function() {
		var readerclass = readerfactory.createReader({readerType:"markdown"});
		runReader(new Reader(readerclass));
	});     
	                               
	$("#fancyreader").click(function() {
		var readerclass = readerfactory.createReader({readerType:"json"});
		runFancyReader(new FancyReader(readerclass));
	});                                    

	var runReader = function(reader) {
    	$("#documentShow").empty();
    	var data = reader.readFile();
		$("#documentShow").append(data);
    };

	var runFancyReader = function(reader) {
    	$("#documentShow").empty();
    	var data = reader.getCurrentDocLength();
		$("#documentShow").append(data);
    };


});
