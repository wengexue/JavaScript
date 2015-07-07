var express = require('express');
var router = express.Router();

/* GET New page. */
router.get('/', function(request, response) {
    response.render('NewPage', {
        title : 'Routing New Page'
    });
});

router.get('/dirName', function(request, response) {
    response.send({ dirName : __dirname });
});

module.exports = router;