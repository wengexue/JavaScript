/**
 * @author Charlie
 */

function hello(func) {
    'use strict';
    $("#test02").html("It works! ");
    func();
}
function returnValue(callback){
	return callback();
}


$(document).ready(function() {
    "use strict";

    $("#test01").html("Document Ready called");
    
    var value = returnValue(callback);
    $("#test04").html(value);


	function callback() {
        return 327;
    };
    
    
/*    function callback() {
        $("#test03").html("It's a nine!");
    };*/
   
    hello(function() {
        $("#test03").html("It's a nine!");
    });
});
