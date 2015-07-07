define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var Add = (function() {

        function Add() {
        }       

        Add.prototype.getAddResult = function() {
        	var numberObject = {
				'a' : $("#operanda").val(),
				'b' : $("#operandb").val()
			};
            $.getJSON('/CalculatePage/add', numberObject, function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return Add;
    }());
    
    return Add;
});