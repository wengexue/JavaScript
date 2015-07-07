/**
 * Created by wenge.xue on 6/1/2015.
 */


var mongoose = require('mongoose');


var musiciansSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "genre": String,
    "subjects": [String],
    comments: [{ commentText: String, date: Date }]
});

module.exports = mongoose.model('musicians', musiciansSchema);