function callbackHandler(callback, param1, param2){
	
		return callback(param1, param2);
}

function callbackHandler1(callback, param1, param2){
	
		return callback(param1);
}

function addTwo(a, b){
	return a+b;
}

function getRemainder(a, b){
	return a%b;
}

function convertMilesToFeet(a){
	return 5280*a;
}

$(document).ready(function() {
	
    var param1 = 5;
    var param2 = 3;
    var result = callbackHandler(addTwo, param1, param2);
    $("#myList").append("<li>" + result + "</li>");
    var result = callbackHandler(getRemainder, param1, param2);
    $("#myList").append("<li>" + result + "</li>");
    var result = callbackHandler1(convertMilesToFeet, param1, param2);
    $("#myList").append("<li>" + result + "</li>");
    
});

