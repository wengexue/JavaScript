var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var scientistSchema = require('../models/scientists');
var scientists = scientistSchema.scientist;
var comments = scientistSchema.comment;
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'MongooseSubdocs'});
});

var allData;
var connected = false;
var numberOfScientists = 0;
var totalScientistsSaved = 0;

function doConnection() {
  connected = true;
  var userName = 'csc';
  var password = 'xue';
  var siteAndPort = 'ds031852.mongolab.com:31852';
  var databaseName = 'prog219-xue';
  var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
  console.log(url);
  mongoose.connect(url);
}

function insertScientist(scientist, response) {
  if (!connected) {
    doConnection();
  }
  var newScientist = new scientists({
    "firstName": scientist.firstName,
    "lastName": scientist.lastName,
    "subject": scientist.subject,
    "subjects": scientist.subjects,
    "comments": scientist.comments
  });

  console.log('inserting', newScientist.lastName);

  newScientist.save(function(err) {
    console.log('saved: ', newScientist.lastName);
    totalScientistsSaved++;
    if (totalScientistsSaved === numberOfScientists) {
      //mongoose.disconnect();
      response.send({result: 'Success'});
    }
  });
}

function writeData(fileName, data) {
  var data = JSON.stringify(data, null, 4);
  fs.writeFile(fileName, data, function(err, data) {
    if (err) throw(err);
    console.log('success writing file');
  });
}

function readDataAndInsert(response) {
  fs.readFile('ValidScientists.json', function(err, scientists) {
    if (err) throw (err);
    scientists = JSON.parse(scientists);
    numberOfScientists = scientists.length;
    for (var i = 0; i < scientists.length; i++) {
      insertScientist(scientists[i], response);
    }
  });
}

router.get('/all-data', function(request, response) {
  if (!connected) {
    doConnection();
  }

  scientists.find({}, function(err, data) {
    console.log(data.length);
    console.log(data[0]);
    allData = data;

    writeData('scientists.json', allData);

    response.send({
      result: 'Success',
      allData: data
    });
  });
});

router.post('/emptyCollection', function(request, response) {
  scientists.remove({}, function(err) {
    response.send({result: 'collection removed'});
  });
});

router.post('/insertValidCollection', function(request, response) {
  readDataAndInsert(response);
});

router.post('/newComment', function(request, response) {
  if (!connected) {
    doConnection();
  }

  console.log('newComments called. Body is next: ');
  console.log(request.body);
  var scientist = request.body.scientist;
  var comment = request.body.comment;

  scientists.findOne({"_id": scientist._id }, function(err, scientist) {
    console.log('After Find.');
    console.log(scientist);
    if (scientist.comments) {
      scientist.comments.push(comment);
      scientist.markModified('comments');
      scientist.save(function(err, data) {
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
  if (!connected) {
    doConnection();
  }

  var scientist = request.body.scientist;
  var comment = request.body.comment;
  console.log(comment);
  scientists.findOne({"_id": scientist._id }, function(err, scientist) {
    if (scientist.comments) {
      remove(scientist.comments, comment);
      scientist.markModified('comments');
      scientist.save(function(err, updatedScientist) {
        console.log(updatedScientist);
        console.log('After save.');
        response.send({result: 'Success', update: updatedScientist});
      });
    } else {
      response.send({result: 'Error'});
    }
  });
});

router.post('/updateComments', function(request, response) {
  if (!connected) {
    doConnection();
  }

  console.log('updateComments called. Body is next: ');
  console.log(request.body);
  scientists.update({_id: request.body.id}, {
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

module.exports = router;