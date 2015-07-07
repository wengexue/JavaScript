var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('MarkdownPage', { title: 'Markdown Page' });
});

router.get('/readMarkdown', function(request, response) {
	console.log('root read called: ' + JSON.stringify(request.query));
	var fileName = request.query.fileName;
	fs.readFile(fileName, 'utf8', function(error, data) {
		if (error) {
			response.send({ "Could_Not_Find_File": error, fileName: fileName});
			return;
		}		
		try {
			console.log("Sending error");
			response.send(data);
		} catch(e) {			
			response.send({ "error": "Could not parse", "Could_Not_Parse_JSON": "error"});
		};		
	});
});

router.get('/insertDB', function(request, response) {'use strict';
    console.log("insertDB route is called");
    var obj = request.query;
    queryMongo.insertIntoCollection(response, obj);
});




module.exports = router;
