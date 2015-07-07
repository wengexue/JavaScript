define(function() {
    'use strict';

    var DisplayMetaData = (function() {

        function DisplayMetaData(reader) {}

        DisplayMetaData.prototype.display = function(serverData) {
            $("#title").html("title:  "+serverData.title);
            $("#type").html("type:  "+serverData.type);
            $("#version").html("version:  "+serverData.version);
            $("#name").html("name:  "+serverData.authorInfo.name);
            $("#website").html("website:  "+serverData.authorInfo.website);
        };

        return DisplayMetaData;
    }());

    return DisplayMetaData;

});
