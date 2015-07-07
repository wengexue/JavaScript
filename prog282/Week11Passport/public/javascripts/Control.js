/**
 * Control.js
 */

var Control = (function() {
    
    function Control() {
        console.log("Control constructor called");
        $("#info").click(info);
    }
    
    var info = function() {
        $.ajax({
            url: '/info'
        }).success(function(serverInfo) {
            $("#report").html(JSON.stringify(serverInfo));
        }).error(function(err) {
            $("#debug").html(err);
        });
    };
    
    return Control;
    
}());


$(document).ready(function() {
    var control = new Control();
});