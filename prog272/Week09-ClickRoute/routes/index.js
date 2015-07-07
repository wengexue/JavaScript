var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Click Routes' });
});

router.get('/Item01', function(request, response) {
    var result = { "result": "Success" };
    response.send(result);
});

router.get('/Item02', function(request, response) {
    var result = { "route": "/Item01" };
    response.send(result);
});

router.get('/Item03', function(request, response) {
    var result = { "message": "The server sent me." };
    response.send(result);
});


module.exports = router;
