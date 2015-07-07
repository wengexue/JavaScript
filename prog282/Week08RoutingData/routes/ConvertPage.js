var express = require('express');
var router = express.Router();

/* GET Convert page. */
router.get('/', function(request, response) {
    response.render('ConvertPage', {
        title : 'Routing Convert Page'
    });
});

router.get('/feettomiles', function(request, response) {
	var a = request.query.a;
	var val = parseInt(a)*0.000189394;
    response.send({ "result" : val });
});

router.get('/hourstoseconds', function(request, response) {
	var a = request.query.a;
	var val = parseInt(a)*3600;
    response.send({ "result" : val });
});

router.get('/fahrenheittocelsius', function(request, response) {
	var a = request.query.a;
	var val = (parseInt(a)-32)*5/9;
    response.send({ "result" : val });
});

module.exports = router;