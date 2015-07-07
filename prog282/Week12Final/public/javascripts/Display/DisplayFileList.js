define(["DisplayMetaData"], function(DisplayMetaData) {
    'use strict';

    var DisplayFileList = (function() {

        function DisplayFileList() {

        }

        DisplayFileList.prototype.display = function(serverData) {
            var fileList = serverData.content;
            for (var file in fileList) {
                var dataContent = fileList[file] + '>' + file;
                dataContent = '<li class="displayItem" data=' + dataContent + '</li>';
                $('#displayList').append(dataContent);
            }
            //var displaymeta = new DisplayMetaData(serverData);
            //displaymeta.display(serverData);
            $.publish('pageRefresh', {
                message: "Refreshed FileList",
                serverData: serverData
            });
        };

        return DisplayFileList;
    }());

    return DisplayFileList;

});
