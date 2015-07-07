define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var FeetToMiles = (function() {

        function FeetToMiles() {
        }       

        FeetToMiles.prototype.getFeetToMilesResult = function() {
        	var numberObject = {
				'a' : $("#number").val(),
			};
            $.getJSON('/ConvertPage/feettomiles', numberObject, function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return FeetToMiles;
    }());
    
    return FeetToMiles;
});