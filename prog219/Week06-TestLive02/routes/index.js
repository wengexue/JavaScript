var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Test Live' });
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render('ScienceInfo/' + req.params.id, { title: req.params.id });
});

module.exports = router;
