var express = require('express');
var router = express.Router();
var connect = require('./connect');
var musicianSchema = require('../models/musicians');
var musicians = musicianSchema.musician;
var comments = musicianSchema.comment;
var mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angular&Mongoose' });
});



router.get('/all-data', function(request, response) {
  if (!connect.connected) {
    connect.doConnection();
  }
  musicians.find({}, function(err, data) {
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
      genre: allData[request.params.id].genre,
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
    var query = musicians.where({_id: request.params.id});
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
    genre:  body.genre
  };
  console.log(newData);
  return newData;
}

router.post('/save', function(request, response) {
  console.log('Save called. Body is next: ')

  var newData = getNewData(request.body);

  if (!connect.connected) {
    connect.doConnection();
  }

  console.log("about to call update");
  musicians.update({ _id: request.body.id }, { $set: newData},
      function(err, data) {
        console.log(err, data);
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', data: data});
      }
  );
});

router.post('/delete', function(request, response) {
  console.log('Delete called. ');

  if (!connect.connected) {
    connect.doConnection();
  }

  console.log("about to call delete");
  musicians.remove({ _id: request.body.id },
      function(err, musician) {
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', data: musician});
      }
  );
});

router.post('/insert', function(request, response) {
  console.log('Save called. Body is next: ');
  //var newData = getNewData(request.body);
  var newData = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    genre:  request.body.genre,
    comments: [],
    subjects: []
  };
  console.log("New Data", newData);

  if (!connect.connected) {
    connect.doConnection();
  }

  console.log("about to call update");
  var f = new musicians(newData);
  f.save(function(e, a) {
    response.send({result: e + a});
  });
});

router.post('/updateSubjects', function(request, response) {
  console.log('updateSubjects called. Body is next: ');
  console.log(request.body);
  musicians.update({ _id: request.body.id }, {
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



router.post('/newComment', function(request, response) {
  if (!connect.connected) {
    connect.doConnection();
  }

  console.log('newComments called. Body is next: ');
  console.log(request.body);
  var musician = request.body.musician;
  var comment = request.body.comment;

  musicians.findOne({"_id": musician._id }, function(err, musician) {
    console.log('After Find.');
    console.log(musician);
    if (musician.comments) {
      musician.comments.push(comment);
      musician.markModified('comments');
      musician.save(function(err, data) {
        console.log('After save.');
        console.log("Error:", err);
        console.log("Data: ", data);
        response.send({result: 'Success', data: data});
      });
    } else {
      response.send({result: 'Error'});
    }
  });
});

function remove(arr, item) {
  for(var i = arr.length; i--;) {
    if(arr[i]._id == item._id) {
      arr.splice(i, 1);
    }
  }
}

router.post('/deleteComment', function(request, response) {
//    throw("not implemented");
  if (!connect.connected) {
    connect.doConnection();
  }

  var musician = request.body.musician;
  var comment = request.body.comment;
  console.log(comment);
  musicians.findOne({"_id": musician._id }, function(err, musician) {
    if (musician.comments) {
      remove(musician.comments, comment);
      musician.markModified('comments');
      musician.save(function(err, updatedMusician) {
        console.log(updatedMusician);
        console.log('After save.');
        response.send({result: 'Success', update: updatedMusician});
      });
    } else {
      response.send({result: 'Error'});
    }
  });
});

router.post('/updateComments', function(request, response) {
  if (!connect.connected) {
    connect.doConnection();
  }

  console.log('updateComments called. Body is next: ');
  console.log(request.body);
  musicians.update({_id: request.body.id}, {
        $set: {
          comments: request.body.comments
        }
      },
      function(err, electionObject) {
        console.log(err, electionObject);
        if (err) {
          console.log(err);
        }
        response.send({result: 'Success', electionObject: electionObject});
      }
  );
});





router.get('/:id', function(request, response) {
  console.log(request.params.id);
  response.render(request.params.id, { title: request.params.id});
});


module.exports = router;
