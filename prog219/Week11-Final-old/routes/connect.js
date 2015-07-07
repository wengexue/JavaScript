/**
 * Created by xuewenwen on 6/10/2015.
 */
var mongoose = require('mongoose');

var connect = {

    connected: false,

    doConnection: function() {
        //mongoose.connect('mongodb://csc:xue@ds031852.mongolab.com:31852/prog219-xue');
        connect.connected = true;
        var userName = 'csc';
        var password = 'xue';
        var siteAndPort = 'ds031852.mongolab.com:31852';
        var databaseName = 'prog219-xue';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    }
};

module.exports = connect;
