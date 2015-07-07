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
