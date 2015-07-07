var express = require('express');
var router = express.Router();
var fs = require('fs');
var queryMongo = require('./QueryMongo').QueryMongo;

/* GET home page. */
router.get('/', function(req, res) {
    "use strict";
    res.render('Markdown', {
        title: 'Markdown'
    });
});


router.get('/savePage', function(request, response) {
    "use strict";
    console.log("Markdown.savePage called");
    console.log(request.query.fileName);

    var success = 0;

    function handleSuccess(docsInit) {
        var docs;
        if (docsInit) {
            docs = docsInit;
        }
        if (success === 2) {
            console.log("Sending Success");
            response.send({
                result: "success",
                docs: docs
            });
        } else {
            success += 1;
        }
    }

    var fileName = request.query.fileName;
    var markdown = request.query.markdown;
    fs.writeFile(fileName, markdown, 'utf8', function(error) {
        if (error) {
            throw error;
        }
        handleSuccess('success writing markdown');
    });

    var htmlFileName = fileName.substr(0, fileName.lastIndexOf('.')) + '.html';
    fs.writeFile(htmlFileName, request.query.html, 'utf8', function(error) {
        if (error) {
            throw error;
        }
        handleSuccess('success writing html');
    });

	var markdownData = {
	    query : {
	        fileName : request.query.fileName
	    },
	    update : {
	        dataType : "BridgeReader",
	        markdown : request.query.markdown,
	        html : request.query.html,
	        fileName : request.query.fileName
	    }
	};
    queryMongo.updateCollection(markdownData, handleSuccess);

});

module.exports = router;
