var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angular Routes Xue' });
});

router.get('/:id', function(req, res, nest) {
  //console.log(req.params.id);
  res.render(req.params.id, { title: req.params.id });
});


module.exports = router;
