define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var FahrenheitToCelsius = (function() {

        function FahrenheitToCelsius() {
        }       

        FahrenheitToCelsius.prototype.getFahrenheitToCelsiusResult = function() {
        	var numberObject = {
				'a' : $("#number").val(),
			};
            $.getJSON('/ConvertPage/fahrenheittocelsius', numberObject, function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return FahrenheitToCelsius;
    }());
    
    return FahrenheitToCelsius;
});