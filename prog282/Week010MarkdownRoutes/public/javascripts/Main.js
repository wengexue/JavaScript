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
        "Markdown": "Markdown/Markdown.Converter",
        "Editor": "Markdown/Markdown.Editor",
        "MarkShow": "Markdown/MarkShow",
        "PagedownSetup": "Markdown/PagedownSetup",
        "FileTypeSorter": "Utility/FileTypeSorter",
        "Utilities": "Utility/Utilities",
        "TinyPubSub": "Utility/TinyPubSub",
        "Prettify": "./Markdown/prettify",
        "MarkdownExtra": "./Markdown/Markdown.Extra"
    },
    shim: {
        'Markdown': {
            exports: 'Markdown'
        },
        'Editor': {
            deps: ['Markdown'],
            exports: 'Editor'
        },
        "Prettify": {
            deps: ['Markdown', 'Editor'],
            exports: 'Prettify'
        },
        'MarkdownExtra': {
            deps: ['Markdown', 'Editor', 'Prettify'],
            exports: 'MarkdownExtra'
        }
    }

});

function endsWith(value, suffix) {
    "use strict";
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

require(['jquery', "MarkdownExtra", "Control", "MarkShow"],
    function(jq, MarkdownExtra, Control, MarkShow) {
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
