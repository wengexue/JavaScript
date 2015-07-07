/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        "jquery" : 'jquery-2.1.0.min',
        "JsonReader" : 'Readers/JsonReader',
        "MarkdownReader" : 'Readers/MarkdownReader',
        "DisplayAddress": 'Display/DisplayAddress',
        "DisplayFileList": 'Display/DisplayFileList'
    }
});

require(['jquery', 'ReaderFactory', 'Reader', 'FancyReader', 'JsonReader', 'MarkdownReader'], 
    function(jq, ReaderFactory, Reader, FancyReader, JsonReader, MarkdownReader) {

	var readerfactory = new ReaderFactory();
    
	$("#readerjson").click(function() {
		$("#readType").html("Using Json Reader");
		var fileName = "Data/FileList.json";
		var readerclass = readerfactory.createReader({readerType:"json"});
		runReader(fileName, new Reader(readerclass));
	});
                
	$("#readermarkdown").click(function() {
		var fileName = "";
		$("#readType").html("Using Markdown Reader");
		var readerclass = readerfactory.createReader({readerType:"markdown"});
		runReader(fileName, new Reader(readerclass));
	});
	
	$("#fancyreader").click(function() {
		$("#readType").html("Using Fancy Reader");
		var readerclass = readerfactory.createReader({readerType:"json"});
		runFancyReader(new FancyReader(readerclass));
	});
	
	$("#displayList").click(function() {
		var fileName = event.target.attributes.data.value;
		var readerclass = readerfactory.createReader({readerType:"json"});
		runReader(fileName, new Reader(readerclass));		
		$('#debug01').html("You picked: " + event.target.innerText);
		$('#debug02').html("Value: " + event.target.attributes.data.value);
	});	

	var clear = function(){
		$("#displayList").empty();
    	$("#documentShow").empty();
		$("#debug01").empty();
    	$("#debug02").empty();
	};

	var runReader = function(file, reader) {
		clear();
    	var data = reader.readFile(file);
    };

	var runFancyReader = function(reader) {
		clear();
    	var fileName="Data/Presidents01.json";
    	var data = reader.getCurrentDocLength(fileName);
    };


});
