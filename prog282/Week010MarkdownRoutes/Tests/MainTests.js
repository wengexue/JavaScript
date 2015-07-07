require.config({
    baseUrl: "/",
    paths: {
        "jquery": "javascripts/jquery-2.1.1",
        "Control": "javascripts/Control",
        "JsonReader": "javascripts/Readers/JsonReader",
        "DefaultReader": "javascripts/Readers/DefaultReader",
        "MarkdownReader": "javascripts/Readers/MarkdownReader",
        "Utilities": "javascripts/Utility/Utilities",
        "TinyPubSub": "javascripts/Utility/TinyPubSub",
        "FileTypeSorter": "javascripts/Utility/FileTypeSorter",
        "DisplayFactory": "javascripts/Factories/DisplayFactory",
        "BridgeFactory": "javascripts/Factories/BridgeFactory",
        "ReaderFactory": "javascripts/Factories/ReaderFactory",
        "DisplayFileList": "javascripts/Display/DisplayFileList",
        "DisplayAddress": "javascripts/Display/DisplayAddress",
        "DisplayPictureCaption": "javascripts/Display/DisplayPictureCaption",
        "DisplayDocumentData": "javascripts/Display/DisplayDocumentData",
        "FancyReaderBridge": "javascripts/Bridges/FancyReaderBridge",
        "ReaderBridge": "javascripts/Bridges/ReaderBridge",
        'jasmine': 'jasmine-2.0.0/jasmine',
        'jasmine-html': 'jasmine-2.0.0/jasmine-html',
        'boot': 'jasmine-2.0.0/boot',

    },
    shim: {
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'jasmine'
        }
    }
});

require(['boot'], function(jasmine) {
    'use strict';

    require(["jquery", "BridgeTests", "DisplayTests", "DefaultSingletonTests", "ControlSingletonTests", "JsonReaderSingletonTests", "MarkdownReaderSingletonTests", "ReaderTests"],
        function(jq, BridgeTests, DisplayTests, DefaultSingletonTests, ControlSingletonTests, JsonReaderSingletonTests, MarkdownReaderSingletonTests, ReaderTests) {
            console.log("Main called.");
            $("p").hide();
            window.onload();
        });
});
