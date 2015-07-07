/**
 * LoginControl.js
 */

define(function() {
    "use strict";

    var LoginControl = (function() {

        function LoginControl() {
            console.log("LoginControl constructor called");
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

        return LoginControl;

    }());

    return LoginControl;
});
