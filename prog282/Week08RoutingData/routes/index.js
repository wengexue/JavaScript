var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
    response.render('index', { title: 'Week07 Routing Data Calvert' });
});

router.get('/sayHello', function(request, response) {    
    console.log(request.query);    

     response.send({ 
        "result": "The server says Hello",
        "codeName": request.query.codeName,
        "product": request.query.product,
        "version": request.query.version,
        "userAgent": request.query.userAgent
     });
});

module.exports = router;
