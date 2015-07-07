define(function() {
    
    var MongoClient = (function() {

        function MongoClient() {
			$('#readAll').click(readAll);
        }
        
        var readAll = function(){
			$.getJSON('/readAll', function(serverData) {
				alert(JSON.stringify(serverData[0], null, 4));
			});
		};

        return MongoClient;

    }());

    return MongoClient;

});