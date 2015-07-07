require.config({
    paths : {
        "jquery" : "jquery-2.1.1",
        "JsonReader" : 'Readers/JsonReader',
        "MarkdownReader" : 'Readers/MarkdownReader',
        "DisplayAddress": 'Display/DisplayAddress',
        "DisplayFileList": 'Display/DisplayFileList',
        "Markdown" : "Markdown/Converter",
        "Editor" : "Markdown/Editor"
    }
});


function endsWith(value, suffix) {
    return value.indexOf(suffix, this.length - suffix.length) !== -1;
}

//var fs = require("fs");

require([ 'jquery', 'Control', 'MarkShow' ], function(jq, Control, MarkShow) {
    'use strict';
    console.log("Main called");

    $(document).ready(function() {
        
        if (endsWith(document.URL, "MarkdownPage")) {
            var showMark = new MarkShow();
        } else {
            var control = new Control();
        }
    });
});