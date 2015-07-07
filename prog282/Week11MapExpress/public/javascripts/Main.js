require.config({
    paths : {
        "jquery": "jquery-2.1.1",
        //"googleMap": ["http://maps.googleapis.com/maps/api/js?sensor=true"],
        "Control": "Control"
    }
});

require([ "jquery", "Control" ], function(jq, Control) {
    'use strict';
    console.log("Main called.");
    elf.control = new Control();
});