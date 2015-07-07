/**
 * DisplayPictureCaption
 */

define(["DisplayMetaData"], function(DisplayMetaData) {
    'use strict';

    var DisplayPictureCaption = (function() {

        function DisplayPictureCaption() {

        }

        DisplayPictureCaption.prototype.display = function(serverData) {
            var datacontent = serverData.content;
            for (var file in datacontent) {
                var data = datacontent[file];
                var eachRecord = "";
                for (var contentItem in data) {
                    if (contentItem == "url") {
                        eachRecord += "<img src=" + data[contentItem] + ">" + "<br><br>";
                    } else {
                        eachRecord += contentItem + ": " + data[contentItem] + "<br><br>";
                    }
                }
                var Content = '<li class="na" data="pictureCaption">' + eachRecord + '</li>';
                $('#displayList').append(Content);
            }
            //var displaymeta = new DisplayMetaData(serverData);
            //displaymeta.display(serverData);
            $.publish('pageRefresh', {
                message: "Refreshed data",
                serverData: serverData
            });
        };

        return DisplayPictureCaption;
    }());

    return DisplayPictureCaption;

});
