define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var GetNine = (function() {

        function GetNine() {
        }       

        GetNine.prototype.getNineResult = function() {
            $.getJSON('/CalculatePage/getNine', function(serverResponse) {
                $('#value').html(serverResponse.result);
            }).error = errorHandler;
        };
        
        return GetNine;
    }());
    
    return GetNine;
});