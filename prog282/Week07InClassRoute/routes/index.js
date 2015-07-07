var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ExpWeek07 In Class Routeress' });
});

router.get('/read', function(request, response) {
/*	var queryObject = request.query;
	var queryAsString = JSON.stringify(request.query);
	console.log("Read called: " + queryAsString);
	response.send({ "firstName": queryObject.firstName });*/

    response.send({ "result": "The server reports success from routes/index.js" });
});

module.exports = router;
