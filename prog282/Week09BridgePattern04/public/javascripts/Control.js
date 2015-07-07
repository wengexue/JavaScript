define([ "ReaderFactory", "BridgeFactory", "Utilities", "TinyPubSub"], function(
        ReaderFactory, BridgeFactory, utilities, TinyPubSub) {

    var Control = (function() {
    	
        var _instance = null;

        var fancyReader = null;
        var factory = null;
        var options = {
            defaultFileName : "Data/FileList.json",
            useDefaultFile : true,
        };
        options.readers = [ "JsonReader", "MarkdownReader", "DefaultReader" ];
        options.objectType = options.readers[0];
        options.fileName = options.defaultFileName;

        function Control() {
            if (_instance === null) {
	            factory = new ReaderFactory();
	//            fancyReader = new BridgeFactory().create({ objectType : "ReaderBridge" });
	            fancyReader = new BridgeFactory().create({ objectType : "FancyReaderBridge" });
	            $.subscribe('pageRefresh', function() { $("li").click(run); });
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
            options.useDefaultFile = utilities.setFileName(options, event);
            runReader(options);
        }

        return Control;

    }());

    return Control;
});