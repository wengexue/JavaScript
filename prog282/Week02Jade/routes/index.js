var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Prog282', myText: 'My Text' });
});

module.exports = router;
