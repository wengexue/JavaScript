define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var HoursToSeconds = (function() {

        function HoursToSeconds() {
        }       

        HoursToSeconds.prototype.getHoursToSecondsResult = function() {
        	var numberObject = {
				'a' : $("#number").val(),
			};
            $.getJSON('/ConvertPage/hourstoseconds', numberObject, function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return HoursToSeconds;
    }());
    
    return HoursToSeconds;
});