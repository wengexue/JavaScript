define(["DisplayMetaData"], function(DisplayMetaData) {
    'use strict';

    var DisplayAddress = (function() {

        function DisplayAddress() {

        }

        DisplayAddress.prototype.display = function(serverData) {
            var datacontent = serverData.content;
            for (var file in datacontent) {
                var content = file + ': ' + datacontent[file];
                var listItem = '<li data="address">' + content + '</li>';
                $('#displayList').append(listItem);
            }
            //var displaymeta = new DisplayMetaData(serverData);
            //displaymeta.display(serverData);
            $.publish('pageRefresh', {
                message: "Refreshed Address",
                serverData: serverData
                //toDisplay: new DisplayMetaData(serverData)
            });
        };

        return DisplayAddress;
    }());

    return DisplayAddress;

});
