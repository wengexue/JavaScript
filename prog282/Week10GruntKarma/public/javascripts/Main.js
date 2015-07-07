require.config({
    paths: {
        "jquery": "jquery-2.1.1",
        "JsonReader": "Readers/JsonReader",
        "DefaultReader": "Readers/DefaultReader",
        "MarkdownReader": "Readers/MarkdownReader",
        "DisplayFactory": "Factories/DisplayFactory",
        "BridgeFactory": "Factories/BridgeFactory",
        "ReaderFactory": "Factories/ReaderFactory",
        "DisplayFileList": "Display/DisplayFileList",
        "DisplayAddress": "Display/DisplayAddress",
        "DisplayPictureCaption": "Display/DisplayPictureCaption",
        "DisplayDocumentData": "Display/DisplayDocumentData",
        "FancyReaderBridge": "Bridges/FancyReaderBridge",
        "ReaderBridge": "Bridges/ReaderBridge",
        "Markdown": "Markdown/Converter",
        "Editor": "Markdown/Editor",
        "MarkShow": "Markdown/MarkShow",
        "PagedownSetup": "Markdown/PagedownSetup",
        "FileTypeSorter": "Utility/FileTypeSorter",
        "Utilities": "Utility/Utilities",
        "TinyPubSub": "Utility/TinyPubSub"
    }
});

function endsWith(value, suffix) {
    "use strict";
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

require(['jquery', "Control", "MarkShow"],
    function(jq, Control, MarkShow) {
        'use strict';
        console.log("Main called");

        $(document).ready(function() {
            if (endsWith(document.URL, "Markdown")) {
                var markShow = new MarkShow();
                markShow.getPick();
            } else {
                var control = new Control();
            }
        });
    });
