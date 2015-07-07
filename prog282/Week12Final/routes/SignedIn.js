/**
 * SignedIn.js
 */

function signedIn(request, response, next) {
    "use strict";
    if (request.isAuthenticated()) {
        console.log("authenticated and valid");
        return next();
    }
    console.log("not authenticated.");
    //response.redirect('/login');
    //response.redirect('/auth/logout');
    response.redirect('/LogIn');
}

exports.signedIn = signedIn;
