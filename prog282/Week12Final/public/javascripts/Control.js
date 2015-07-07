/**
 * @file: Control.js
 */

define(["ReaderFactory", "BridgeFactory", "FileTypeSorter", "Utilities", "TinyPubSub"], function(
    ReaderFactory, BridgeFactory, FileTypeSorter, utilities, TinyPubSub) {

    "use strict";

    var Control = (function() {

        var _instance = null;

        var fancyReader = null;
        var factory = null;
        var fileTypeSorter = null;

        var options = {
            defaultFileName: "/home/bcuser/Data/FileList.json",
            useDefaultFile: true,
        };
        options.readers = ["JsonReader", "MarkdownReader"];
        options.objectType = options.readers[0];
        options.fileName = options.defaultFileName;

        function Control() {
            if (_instance === null) {
                factory = new ReaderFactory();
                fancyReader = new BridgeFactory().create({
                    objectType: "FancyReaderBridge"
                });
                fileTypeSorter = new FileTypeSorter();
                $.subscribe('pageRefresh', function() {
                    $("li").click(run);
                });
                run();
                _instance = this;
            } else {
                return _instance;
            }
        }

        function runReader(options) {
            utilities.displayOptions(options);
            var reader = factory.create(options);
            fancyReader.setReader(reader);
            fancyReader.readFile(options.fileName);
        }

        function run(event) {
            options.useDefaultFile = fileTypeSorter.setFileName(options, event);
            runReader(options);
        }

        return Control;

    }());

    return Control;
});
