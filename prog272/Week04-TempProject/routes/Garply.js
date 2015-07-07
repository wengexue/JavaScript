/**
 * Created by bcuser on 1/30/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send({ 'result': 'Default response from routes/Garply.js' });
});

router.get('/readQux', function(request, response) {
    response.send({ "result" : "Success from readQux in routes/Garply.js" });
});

module.exports = router;
