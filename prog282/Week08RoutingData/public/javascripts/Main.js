/**
 * @author Charlie Calvert
 */

require.config({
    paths : {
        "jquery" : "jquery-2.1.1",
        "Hello": "Tools/Hello",
        "DirName": "Tools/DirName",
        "GetNine": "Tools/GetNine",
        "Add": "Tools/Add",
        "Multiply": "Tools/Multiply",
        "FeetToMiles": "Tools/FeetToMiles",
        "HoursToSeconds": "Tools/HoursToSeconds",
        "FahrenheitToCelsius": "Tools/FahrenheitToCelsius",
        "Position": "Tools/Position",
        "Utilities": "Tools/Utilities"
    }
});

require([ 'jquery', 'Factory' ], function(jq, Factory) {
    'use strict';   
    console.log("Main called");
    
    var factory = new Factory();
    factory.create({ 'productType': 'Control'});
});