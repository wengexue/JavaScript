require.config({
    paths : {
        "jquery" : "jquery-2.1.1",
        "JsonReader" : "Readers/JsonReader",
        "DefaultReader": "Readers/DefaultReader",
        "MarkdownReader": "Readers/MarkdownReader",
//        "Utilities": "javascripts/Utilities",
 //       "TinyPubSub": "javascripts/TinyPubSub",
        "DisplayFactory": "Factories/DisplayFactory",
        "BridgeFactory": "Factories/BridgeFactory",
        "ReaderFactory": "Factories/ReaderFactory",
        "DisplayFileList": "Display/DisplayFileList",
        "DisplayAddress": "Display/DisplayAddress",
        "FancyReaderBridge": "Bridges/FancyReaderBridge",
        "ReaderBridge": "Bridges/ReaderBridge",
    }
});

require(['jquery', "Control"], 

    function(jq, Control) {
        'use strict';
        console.log("Main called");
        
        $(document).ready(function() {
            var control = new Control();
        });

    }

);