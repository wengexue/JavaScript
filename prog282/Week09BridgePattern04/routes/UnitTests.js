var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('UnitTests', { title: 'UnitTests for Bridge04' });
});


module.exports = router;