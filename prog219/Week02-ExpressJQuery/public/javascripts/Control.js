/**
 * Created by wenge.xue on 4/13/2015.
 */
var MyObject = (function() {

    function MyObject() {
        $('#getItems').click(showItems);
        $('#getMarie').click(showMarie);
        $('#sendString').click(sendString);
    }

    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html("Ready was called and myObjected created");
    };

    function sendString(){
        console.log('sendString was called');
    }

    function showItems() {
        $("#myList").append('<li>' + 'item01' + '</li>');
        $("#myList").append('<li>' + 'item02' + '</li>');
        $("#myList").append('<li>' + 'item03' + '</li>');
    }

    function showMarie(){
        var marie = {
            "firstName": "Marie",
            "lastName": "Curie",
            "city": "Paris",
            "country": "France"
        };
        for (var property in marie) {
            if (marie.hasOwnProperty(property)) {
                $("#myList").append('<li>' + marie[property] + '</li>');
            }
        }
    }

    return MyObject;
}());




$(document).ready(function() {
    var myObject = new MyObject();
    myObject.readyCalled();
});