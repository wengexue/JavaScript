var express = require('express');
var router = express.Router();
var scientists = require('../models/scientists');
var mongoose = require('mongoose');

var connected = false;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose Basics' });
});


function doConnection() {
  //mongodb://<dbuser>:<dbpassword>@ds031852.mongolab.com:31852/prog219-xue
  mongoose.connect('mongodb://csc:xue@ds031852.mongolab.com:31852/prog219-xue');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(callback) {
    connected = true;
    console.log('Opened connection to mongo');
  });

}

router.get('/all-data', function(request, response) {
  if (!connected) {
    doConnection();
  }
  scientists.find({}, function(err, data) {
    console.log(data.length);
    console.log(data[0]);
    response.send({
      result: 'Success',
      allData: data
    });
  });
});

router.get('/data/:id', function(request, response) {
  console.log('Request id: ' + request.params.id);
  console.log('type of request:' + typeof request.params.id);
  var idInvalid = (request.params.id === 'undefined');
  console.log('IdInvalid: ' + idInvalid);
  if (!idInvalid) {
    response.send({
      result: 'Success',
      numberOfDocuments: allData.length,
      id: allData[request.params.id]._id,
      firstName: allData[request.params.id].firstName,
      lastName: allData[request.params.id].lastName,
      subject: allData[request.params.id].subject,
      subjects: allData[request.params.id].subjects,
      comments: allData[request.params.id].comments
    });
  } else {
    response.send({result: 'Invalid id'});
  }
});

router.get('/find-by-id/:id', function(request, response) {
  console.log('Request id: ' + request.params.id);
  console.log('type of request:' + typeof request.params.id);
  var idInvalid = (request.params.id === 'undefined');
  console.log('IdInvalid: ' + idInvalid);
  if (!idInvalid) {
    var query = scientists.where({_id: request.params.id});
    query.findOne(function(err, scientist) {
      if (err) {
        response.send(err);
      }
      if (scientist) {
        response.send(scientist);
      }
    });
  } else {
    response.send({result: 'Invalid id'});
  }
});

function getNewData(body) {
  console.log(body);
  var newData = {
    firstName: body.firstName,
    lastName: body.lastName,
    subject:  body.subject
  };
  console.log(newData);
  return newData;
}

router.post('/save', function(request, response) {
  console.log('Save called. Body is next: ')

  var newData = getNewData(request.body);

  if (!connected) {
    doConnection();
  }

  console.log("about to call update");
  scientists.update({ _id: request.body.id }, { $set: newData},
      function(err, data) {
        console.log(err, data);
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', data: data});
      }
  );

});

router.post('/insert', function(request, response) {
  console.log('Save called. Body is next: ');
  //var newData = getNewData(request.body);
  var newData = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    subject:  request.body.subject,
    comments: [],
    subjects: []
  };
  console.log("New Data", newData);

  if (!connected) {
    doConnection();
  }

  console.log("about to call update");
  var f = new scientists(newData);
  f.save(function(e, a) {
    response.send({result: e + a});
  });
});

router.post('/updateSubjects', function(request, response) {
  console.log('updateSubjects called. Body is next: ');
  console.log(request.body);
  scientists.update({ _id: request.body.id }, {
        $set: {
          subjects: request.body.subjects
        }
      }, function(err, numUpdated) {
        console.log(err, {numUpdated: numUpdated});
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', data: numUpdated});
      }
  );
});

router.post('/updateComments', function(request, response) {
  console.log('updateComments called. Body is next: ');
  console.log(request.body);
  scientists.update({ _id: request.body.id }, {
        $set: {
          comments: request.body.comments
        }
      }, function(err, numUpdated) {
        console.log(err, {numUpdated: numUpdated});
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', data: numUpdated});
      }
  );
});


router.get('/:id', function(request, response) {
  console.log(request.params.id);
  response.render(request.params.id, {});
});

module.exports = router;
