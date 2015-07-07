var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Week08BridgePattern' });
});


router.get('/read', function(request, response) {
    console.log('root read called: ' + JSON.stringify(request.query));
    var fileName = request.query.fileName;
    fs.readFile(fileName, 'utf8', function(error, data) {
        if (error) {
            response.send({ "Could_Not_Find_File": error, fileName: fileName});
            return;
        }
        
        try {
            var jsonObject = JSON.parse(data);
            console.log("Sending error");
            response.send(jsonObject);
        } catch(e) {            
            response.send({ "error": "Could not parse", "Could_Not_Parse_JSON": "error"});
        };      
    });
    
});



module.exports = router;
