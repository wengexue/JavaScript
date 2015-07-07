/**
 * Created by xuewenwen on 6/10/2015.
 */
var express = require('express');
var router = express.Router();
var connect = require('./connect');
var musicianSchema = require('../models/musicians');
var musicians = musicianSchema.musician;
var comments = musicianSchema.comment;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Angular&Mongoose' });
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


module.exports = router;
