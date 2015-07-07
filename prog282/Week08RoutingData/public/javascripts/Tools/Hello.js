define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var Hello = (function() {

        function Hello() {
        }
        
        Hello.prototype.getHello = function() {
            var nav = window.navigator;
            var browserInfo = {
                codeName : nav.appCodeName,
                appName : nav.appName,
                version : nav.appVersion,
                platform : nav.platform,
                vendor : nav.vendor,
                product : nav.product,
                userAgent : nav.userAgent
            };

            $.getJSON('/sayHello', browserInfo, function(helloObject) {
                $('#paragraph01').html(helloObject.result);
                $('#paragraph02').html(helloObject.codeName);
                $('#paragraph03').html(helloObject.version);
                $('#paragraph04').html(helloObject.product);
                $('#paragraph05').html(helloObject.userAgent);
            }).error = errorHandler;
        };
        
        return Hello;
    }());
    
    return Hello;
});