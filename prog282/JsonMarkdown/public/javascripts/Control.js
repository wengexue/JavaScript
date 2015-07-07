define([ 'jquery', 'ReaderFactory','Reader', 'JsonReader', 'MarkdownReader', 'SaveFile'], function(jq, ReaderFactory, Reader, JsonReader, MarkdownReader, SaveFile) {
    
    var Control = (function() {
    	
    	var readerfactory;
    
        function Control() {
        	readerFactory = new ReaderFactory();
            $("#readermarkdown").click(showMarkdown);
            $("#readerjson").click(showJson);
            $("#displayList").click(displayList);
        };
        
        var showMarkdown = function() {
            window.location.href = '/MarkdownPage';
        };
        
        var showJson = function(){
        	var fileName = "Data/jsonFileList.json";
			var readerclass = readerfactory.createReader({readerType:"json"});
			runReader(fileName, new Reader(readerclass));
        };
        
        var displayList = function(){
			var fileName = event.target.attributes.data.value;
			var readerclass = readerfactory.createReader({readerType:"json"});
			runReader(fileName, new Reader(readerclass));		
			$('#debug01').html("You picked: " + event.target.innerText);
			$('#debug02').html("Value: " + event.target.attributes.data.value);
        };
        
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

        
        
        return Control;
    }());
    
    return Control;
    
});