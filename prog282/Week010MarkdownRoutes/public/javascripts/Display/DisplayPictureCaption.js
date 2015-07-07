/**
 * DisplayPictureCaption
 */

define(function(require) {
    'use strict';

    var DisplayPictureCaption = (function() {

        function DisplayPictureCaption() {

        }

        DisplayPictureCaption.prototype.display = function(serverData) {
            // TODO: Define code for displaying the document here
            for (var file in serverData) {
                var data = serverData[file];
                var eachRecord = "";
                for (var contentItem in data) {
                    if (contentItem == "url") {
                        eachRecord += "<img src=" + data[contentItem] + ">" + "<br><br>";
                    } else {
                        eachRecord += contentItem + ": " + data[contentItem] + "<br><br>";
                    }
                }
                var dataContent = '<li class="na" data="pictureCaption">' + eachRecord + '</li>';
                $('#displayList').append(dataContent);
            }
            $.publish('pageRefresh', {
                message: "Refreshed data"
            });
        };

        return DisplayPictureCaption;
    }());

    return DisplayPictureCaption;

});
