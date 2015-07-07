/**
 * Created by wenge.xue on 6/1/2015.
 */


var mongoose = require('mongoose');

/*
var musiciansSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "genre": String,
    "subjects": [String],
    comments: [{ body: String, date: Date }]
});

module.exports = mongoose.model('musicians', musiciansSchema);*/

var commentSchema = mongoose.Schema({
    commentText: String,
    date: { type: Date, default: Date.now }
});

var musicianSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "genre": String,
    "subjects": [String],
    comments: [commentSchema]
});

module.exports = {
    comment: mongoose.model('comment', commentSchema),
    musician: mongoose.model('musician', musicianSchema)
};
