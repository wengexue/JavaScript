var MyObject = (function() {

    function MyObject() {
        console.log("Constructor called.");
        $("#myButton").click(this.readyCalled);
    }
    
    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html("Ready was called and myObjected created");
    }
    
    return MyObject;
}());


$(document).ready(function() {
    var myObject = new MyObject();
//    myObject.readyCalled();
});
