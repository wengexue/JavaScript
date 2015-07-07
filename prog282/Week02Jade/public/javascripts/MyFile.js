var MyObject = (function() {

    function MyObject() {
        console.log("Constructor called.");
        $("#myButton").click(this.readyCalled);
    }
    
    MyObject.prototype.readyCalled = function() {
//        $("#readyCalled").html("This is what is put in the paragraph");
		  console.log("=======");
		  $("#readyCalled").append("aaaa");
    }
    
    return MyObject;
}());


$(document).ready(function() {
    var myObject = new MyObject();
    // myObject.readyCalled();
});
