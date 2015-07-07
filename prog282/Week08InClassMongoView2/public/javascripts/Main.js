    require.config({
      paths: {
        "jquery": "jquery-2.1.1",
      }
    });
    
    require(["jquery","MongoClient"], function(jq, MongoClient) { 
        'use strict';
        console.log("Main called.");
        $(document).ready(function(){
        	var mongoClient = new MongoClient();
        });

    });