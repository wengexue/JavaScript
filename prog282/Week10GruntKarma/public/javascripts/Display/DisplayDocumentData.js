/**
 * DisplayDocumentData
 */

define(function(require) {
    'use strict';

    var DisplayDocumentData = (function() {

        function DisplayDocumentData() {

        }

        DisplayDocumentData.prototype.display = function(serverData) {
            // TODO: Define code for displaying the document here
            for (var file in serverData) {
                var data = serverData[file];
                var eachRecord = "";
                for (var contentItem in data) {
                    eachRecord += contentItem + ": " + data[contentItem] + "<br><br>";
                }
                var dataContent = '<li class="na1", data="pictureCaption">' + eachRecord + '</li>';
                $('#displayList').append(dataContent);
            }
            $.publish('pageRefresh', {
                message: "Refreshed data"
            });
        };

        return DisplayDocumentData;
    }());

    return DisplayDocumentData;

});
