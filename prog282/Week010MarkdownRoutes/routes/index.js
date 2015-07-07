var express = require('express');
var router = express.Router();
var fs = require('fs');
var internalSessionNumber = 0; // Place near top of file

/* GET home page. */
router.get('/', function(request, response) {
    "use strict";
    response.render('index', {
        title: 'Week08BridgePattern'
    });
    if (typeof request.session.sessionNumber === 'undefined') {
        console.log("Session undefined, setting number");
        request.session.sessionNumber = internalSessionNumber++;
    }
});


router.get('/read', function(request, response) {
    "use strict";
    console.log('root read called: ' + JSON.stringify(request.query));
    var fileName = request.query.fileName;
    fs.readFile(fileName, 'utf8', function(error, data) {
        if (error) {
            response.send({
                "Could_Not_Find_File": error,
                fileName: fileName
            });
            return;
        }

        try {
            var jsonObject = JSON.parse(data);
            console.log("Sending result");
            response.send(jsonObject);
        } catch (e) {
            response.send({
                "error": "Could not parse",
                "Could_Not_Parse_JSON": "error"
            });
        }
    });

});


module.exports = router;
