/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		"jquery" : "jquery-2.1.1",
		"JsonReader" : "./Readers/JsonReader",
		"DisplayFileList": "./Display/DisplayFileList"
	}
});

require([ "jquery", "JsonReader"],
		function(jq, JsonReader) {
			'use strict';
			console.log("Main called.");

			function runReader(event) {
				var jsonReader = new JsonReader(); 
				jsonReader.readFile(event.data.fileName);
			}
			
			function callBack01(data){
				alert(data.sayhello);
			}

			function callBack02(data){
				$("#debug01").html(data.sayHello);

			}

			
			function sayHello(){
				$.getJSON('/sayHello', callBack02);
			}
			
			$("#jsonReader").click({
				objectType : "JsonReader",
				fileName : "public/FileList.json"
			}, runReader);
			
			$("#sayHello").click(sayHello);
		});
