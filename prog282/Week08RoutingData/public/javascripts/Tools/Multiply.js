define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var Multiply = (function() {

        function Multiply() {
        }       

        Multiply.prototype.getMultiplyResult = function() {
        	var numberObject = {
				'a' : $("#operanda").val(),
				'b' : $("#operandb").val()
			};
            $.getJSON('/CalculatePage/multiply', numberObject, function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return Multiply;
    }());
    
    return Multiply;
});