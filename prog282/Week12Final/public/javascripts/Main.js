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
        "DisplayMetaData": "Display/DisplayMetaData",
        "FancyReaderBridge": "Bridges/FancyReaderBridge",
        "ReaderBridge": "Bridges/ReaderBridge",
        "Markdown": "Markdown/Markdown.Converter",
        "Editor": "Markdown/Markdown.Editor",
        "MarkShow": "Markdown/MarkShow",
        "PagedownSetup": "Markdown/PagedownSetup",
        "MarkdownExtra": "Markdown/Markdown.Extra",
        "Prettify": "Markdown/prettify",
        "FileTypeSorter": "Utility/FileTypeSorter",
        "Utilities": "Utility/Utilities",
        "TinyPubSub": "Utility/TinyPubSub",
        "bootstrap": "bootstrap.min",
//        "LoginControl": "LoginControl",
        "MapControl": "MapControl"
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
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'TinyPubSub': {
            deps: ['jquery'],
            exports: 'TinyPubSub'
        }
    }

});

function endsWith(value, suffix) {
    "use strict";
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
}

require(['bootstrap', "MarkdownExtra", "Control", "MarkShow", "MapControl"],
    function(bootstrap, MarkdownExtra, Control, MarkShow, MapControl) {
        'use strict';
        console.log("Main called");

        $(document).ready(function() {
            if (endsWith(document.URL, "MapExpress")) {
                elf.mapcontrol = new MapControl();
            } 
            /*else if (endsWith(document.URL, "LogIn")) {
                var logincontrol = new LoginControl();
            }*/ 
            else if (endsWith(document.URL, "Markdown")) {
                var markShow = new MarkShow();
                markShow.getPick();
            } else {
                var control = new Control();
            }
        });
    });
