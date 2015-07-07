var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send({ 'result': 'Hello from address' });
});

/*
router.get('/', function(req, res) {
  response.render({'result' : "Hello from address"});
});*/

router.get('/read', function(request, response) {
  response.send({"result" : "Reading from routes/address.js"});
});

module.exports = router;
