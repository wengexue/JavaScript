var express = require('express');
var router = express.Router();

/* GET Calculate page. */
router.get('/', function(request, response) {
    response.render('CalculatePage', {
        title : 'Routing Calculate Page'
    });
});

router.get('/multiply', function(request, response) {
	var a = request.query.a;
	var b = request.query.b;
	var product = parseInt(a)*parseInt(b);
    response.send({ "result" : product });
});

router.get('/add', function(request, response) {
	var a = request.query.a;
	var b = request.query.b;
	var sum = parseInt(a)+parseInt(b);
    response.send({ "result" : sum });
});

router.get('/getNine', function(request, response) {
    response.send({ "result" : "nine" });
});

module.exports = router;