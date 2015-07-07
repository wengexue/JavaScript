var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'MongoExpress & AngularRouting' });
});


router.get('/:id', function(req, res, nest) {
    console.log(req.params.id);
    res.render(req.params.id, { title: req.params.id });
});

/*
router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  res.render('MusicInfo/' + req.params.id, { title: req.params.id });
});
*/
module.exports = router;
