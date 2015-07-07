define(function(require) {
    
    
    var SaveFile = (function() {


        function SaveFile() {
        	
        }
        
		SaveFile.prototype.saveToDb = function(fileName) {
			var text = $("#wmd-input-elf");
			var fileObject = {
                'FileName': fileName,
                'Path': fileName,
                'markdown': text
			};
			$.getJSON('/insertDB', fileObject, function(err,data){
				alert("save to MongoDb.");
			});
		};

		SaveFile.prototype.saveToHtml = function(fileName) {

		};


        return SaveFile;
        
    }());
    
    return SaveFile;
});