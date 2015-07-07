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

router.get('/setPick', function(request, response) {
    'use strict';
    console.log("SetPick Query: " + request.query.pick);
    request.session.pick = request.query.pick;
    console.log("SetPick Session: " + JSON.stringify(request.session));
    response.send({
        "result": "success",
        "sessionNumber": request.session.sessionNumber
    });
    console.log("Sent message");
});

router.get('/getPick', function(request, response) {
    'use strict';
    console.log("GetPick: " + request.session.sessionNumber);
    console.log("GetPick Session: " + JSON.stringify(request.session));
    fs.readFile(request.session.pick, 'utf8', function(error, markdown) {
        if (error) {
            console.log("Sending Error" + error);
            response.send({
                "Could_Not_Find_File": error,
                fileName: fileName
            });
            return;
        }
        console.log("Successfully load file, sending response.");
        response.send({
            "userPick": request.session.pick,
            "content": markdown,
            "sessionNumber": request.session.sessionNumber
        });
    });
});



router.get('/savePage', function(request, response) {
    "use strict";
    console.log("Markdown.savePage called");
    console.log(request.query.fileName);

    /*    var success = 0;

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
    }*/

    var fileName = request.query.fileName;
    var markdown = request.query.markdown;
    fs.writeFile(fileName, markdown, 'utf8', function(error) {
        if (error) {
            throw error;
        }
        //handleSuccess('success writing markdown');
    });

    var htmlFileName = fileName.substr(0, fileName.lastIndexOf('.')) + '.html';
    fs.writeFile(htmlFileName, request.query.html, 'utf8', function(error) {
        if (error) {
            throw error;
        }
        //handleSuccess('success writing html');
    });

    var objectToInsert = {
        type: 'htmlMarkdown',
        "markdown": request.query.markdown,
        "fileName": request.query.fileName
    };
    queryMongo.insertIntoCollection(response, objectToInsert);
    /*    QueryMongo.insertIntoCollection(objectToInsert, function(error, data) {
        if (error) {
            throw error;
        }
        handlesuccess('success save to db');
    }); */

});

module.exports = router;
