/**
 * Created by wenge.xue on 6/1/2015.
 */


var mongoose = require('mongoose');

var scientistsSchema = mongoose.Schema({
    "firstName": String,
    "lastName": String,
    "subject": String,
    "subjects": [{ subject: String}],
    comments: [{ body: String, date: Date }]
});



module.exports = mongoose.model('scientists', scientistsSchema);