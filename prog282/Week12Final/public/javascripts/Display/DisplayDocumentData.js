/**
 * DisplayDocumentData
 */

define(["DisplayMetaData"], function(DisplayMetaData) {
    'use strict';

    var DisplayDocumentData = (function() {

        function DisplayDocumentData() {

        }

        DisplayDocumentData.prototype.display = function(serverData) {
            var datacontent = serverData.content;
            for (var file in datacontent) {
                var data = datacontent[file];
                var eachRecord = "";
                for (var contentItem in data) {
                    eachRecord += contentItem + ": " + data[contentItem] + "<br><br>";
                }
                var Content = '<li class="na1", data="pictureCaption">' + eachRecord + '</li>';
                $('#displayList').append(Content);
            }
            //var displaymeta = new DisplayMetaData(serverData);
            //displaymeta.display(serverData);
            $.publish('pageRefresh', {
                message: "Refreshed data",
                serverData: serverData
            });
        };

        return DisplayDocumentData;
    }());

    return DisplayDocumentData;

});
