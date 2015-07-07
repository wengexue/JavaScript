define([ 'jquery' ], function(jq) {

    var Position = (function() {
    
    
        function showError(error) {
            alert('error: ' + error);
        }
        
        function success(position) {
            alert('success' + JSON.stringify(position));
        }

        function Position() {
        }
        
        Position.prototype.getPosition = function() {
		    var latlng;
		
		    var waitTime = 3000;
		    try {
		        if (navigator.geolocation) {
		            navigator.geolocation.getCurrentPosition(
		                    function(position) {
		                        success(position);
		                    }, showError);
		        } else {
		            showError("NOT-SUPPORTED");
		        }
		        var t = setTimeout(function() {
		            if ($("#getZip div.loading").css("display") != "none") {
		                $("#getZip div.loading").hide();
		                $("#errorZip").show();
		            }
		        }, waitTime);
		    } catch (evt) {
		        alert(evt);
    		}        
        };
        
        
        return Position;
    }());
    
    return Position;
});








function showError(error) {
    alert('error: ' + error);
}
function success(position) {
    alert('success' + JSON.stringify(position));
}

function Position() {
    var latlng;

    var waitTime = 3000;
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                    function(position) {
                        success(position);
                    }, showError);
        } else {
            showError("NOT-SUPPORTED");
        }
        var t = setTimeout(function() {
            if ($("#getZip div.loading").css("display") != "none") {
                $("#getZip div.loading").hide();
                $("#errorZip").show();
            }
        }, waitTime);
    } catch (evt) {
        alert(evt);
    }
}       