var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Week10-Callbacks-Xue' });
});

router.get('/getNine', function(request, response){
  response.send({result: 9});

});

module.exports = router;
