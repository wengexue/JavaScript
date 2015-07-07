var express = require('express');
var router = express.Router();

/* GET Position page. */
router.get('/', function(request, response) {
    response.render('PositionPage', {
        title : 'Routing Position Page'
    });
});


module.exports = router;