define(function(require) {
    'use strict';

    var DisplayFileList = (function() {

        function DisplayFileList() {

        }

        DisplayFileList.prototype.display = function(fileList) {
            for ( var file in fileList) {
                var dataContent = fileList[file] + '>' + file;
                dataContent = '<li class="displayItem" data=' + dataContent + '</li>';
                $('#displayList').append(dataContent);
            }
            $.publish('pageRefresh', { message : "Refreshed FileList" });
        };

        return DisplayFileList;
    }());

    return DisplayFileList;

});