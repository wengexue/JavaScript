/**
 * Created by xuewenwen on 6/12/2015.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', userSchema);