/**
 * Created by bcuser on 3/12/15.
 */

function callbackHandler(func, a, b){
    return func(a,b);
}

function add(operatorA,operatorB){
    return operatorA+operatorB;
}

function mod(operatorA, operatorB){
    return operatorA%operatorB;
}

function convert(num1, num2){
    return 5280*num1;
}

function showMessage(message){
    $("#myList").append("<li>" + message + "</li>");
}
function callRoute(){
    showMessage("callRoute was called");
    $.getJSON('/getNine', function(data){
        showMessage(JSON.stringify(data));
        showMessage(data.result);
    });
}


$(document).ready(function(){

    $("#callRoute").click(callRoute);

    var result;

    result = callbackHandler(add, 3,2);
    showMessage(result);

    result = callbackHandler(mod, 3,2);
    showMessage(result);

    result = callbackHandler(convert, 3,2);
    showMessage(result);


})