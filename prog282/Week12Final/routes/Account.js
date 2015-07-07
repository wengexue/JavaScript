var express = require('express');
var router = express.Router();
var signedIn = require('./SignedIn').signedIn;

/* GET home page. */
router.get('/', signedIn, function(request, response) {
    "use strict";
    console.log("Index called");
    response.render('Account', {
        title: 'Passport Account',
        user: request.user.displayName,
        emails: request.user.emails[0].value,
        name: 'LastName: ' + request.user.name.familyName + '     FirstName: ' + request.user.name.givenName,
        identifier: request.user.identifier
    });
    //console.log(request.user.name);

    //response.render('Account', { user : request.user });
});

module.exports = router;
