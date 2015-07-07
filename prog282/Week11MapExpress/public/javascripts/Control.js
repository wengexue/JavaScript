var elf = {
    position : function() {
        this.control.position();
    }
};

define(function(){
	
    var Control = (function() {
        'use strict';
        var mapDiv;
        var currlat;
        var currlng;

        function Control() {
        	//that = this;
            loadScript();
            $("#gotoDarwin").click(gotoDarwin);
            $("#gotoCurrent").click(gotoCurrent);
        }

        function loadScript() {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=elf.position';
            document.body.appendChild(script);
        }
        
        Control.prototype.position = function() {
            var options = {
                enableHighAccuracy : true,
                timeout : 5000,
                maximumAge : 0
            };
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(loadMap, this.showDebug, options);
                } else {
                    showError("NOT-SUPPORTED");
                }
            } catch (evt) {
                alert(evt);
            }
        };
        
        function loadMap(position) {
	        var latlng = new google.maps.LatLng(position.coords.latitude,
	                position.coords.longitude);
	        var mapOptions = {
	            zoom : 8,
	            center : latlng,
	            mapTypeId : google.maps.MapTypeId.ROADMAP
	        };
	        var map = $("#map");
	        mapDiv = new google.maps.Map(map[0], mapOptions);
	
	        makeMarker('here', latlng.lat(), latlng.lng());
	    };
	    
	    function makeMarker(name, latitude, longitude) {
	        var location = new google.maps.LatLng(latitude, longitude);
	
	        var place = new google.maps.Marker({
	            position : location,
	            map : mapDiv,
	            title : name
	        });
	
	        google.maps.event.addListener(place, 'click', function() {
	            mapDiv.setCenter(location);
	            mapDiv.setZoom(10);
	        });
	    };
	    
	    function gotoLocation(latitude, longitude, zoomLevel) {
             var location = new google.maps.LatLng(latitude, longitude);
             mapDiv.setCenter(location);
             mapDiv.setZoom(zoomLevel);
             return location;
        };

		function showError(error) {
		    alert('error: ' + error);
		}

		function success(position) {
			currlat = position.coords.latitude;
			currlng = position.coords.longitude;
		    //alert('success' + JSON.stringify(position));
		}
	    
	    function gotoDarwin() {
		    var darwin = gotoLocation(-12.461334, 130.841904, 14);
		
		    var marker = new google.maps.Marker({
		        position : darwin,
		        map : mapDiv,
		        title : "Hello World!"
		    });
		
		    google.maps.event.addListener(marker, 'click', function() {
		        mapDiv.setZoom(8);
		    });
		}
	    
	    function gotoCurrent() {
	    	var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
			};
			var lat;
			var lng;
	        if (navigator.geolocation) {
            	navigator.geolocation.getCurrentPosition(
                    function(position) {
                        success(position);
			        	//lat = position.coords.latitude;
			        	//lng = position.coords.longitude;
                    }, showError, options);
	        } else {
	            showError("NOT-SUPPORTED");
	        }
			
		    //var currloc = gotoLocation(47.610377, -122.200679, 8);
		    var currloc = gotoLocation(currlat, currlng, 8);
		
		    var marker = new google.maps.Marker({
		        position : currloc,
		        map : mapDiv,
		        title : "Hello World!"
		    });
		
		    google.maps.event.addListener(marker, 'click', function() {
		        mapDiv.setZoom(8);
		    });
		}


        return Control;

    }());

    return Control;
});