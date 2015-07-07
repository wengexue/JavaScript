var express = require('express');
var router = express.Router();
var queryMongo = require('./QueryMongo').QueryMongo;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//Read the collection
router.get('/readAll', function(request, response) {'use strict';
    console.log("ReadAll route is called");
    queryMongo.getAllDocuments(response);
});

module.exports = router;
