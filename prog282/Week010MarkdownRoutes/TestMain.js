/**
 * @author Charlie Calvert
 */

var tests = [];
for (var file in window.__karma__.files) {
    //console.log(file);
    if (/Tests\.js$/.test(file)) {
        console.log("Testing: " + file);
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/base/public',
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
    },
    shim: {},
    deps: tests,
    callback: window.__karma__.start
});
