define(function(require) {
    'use strict';

    var DisplayAddress = (function() {

        function DisplayAddress() {

        }

        DisplayAddress.prototype.display = function(serverData) {
            for (var file in serverData) {
                var content = file + ': ' + serverData[file];
                var listItem = '<li data="address">' + content + '</li>';
                $('#displayList').append(listItem);
            }
            $.publish('pageRefresh', {
                message: "Refreshed Address"
            });
        };

        return DisplayAddress;
    }());

    return DisplayAddress;

});
