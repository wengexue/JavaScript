var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prog272-Xue' });
});

router.get('/read', function(request, response) {
    response.send({ "result": "The server reports success from routes/index.js" });
});

//router.get('/read', function(request, response) {
//    var queryObject = request.query;
//    var queryAsString = JSON.stringify(request.query);
//    console.log("Read called: " + queryAsString);
//    response.send({ "firstName": queryObject.firstName });
//});


module.exports = router;
