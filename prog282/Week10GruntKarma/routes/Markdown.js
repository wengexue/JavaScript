var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    "use strict";
    res.render('Markdown', {
        title: 'Markdown'
    });
});

module.exports = router;
