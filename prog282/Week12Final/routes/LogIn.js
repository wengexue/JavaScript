var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google').Strategy;

/* GET home page. */
router.get('/', function(request, response) {
    console.log("Index called");
    response.render('LogIn', { title : 'Passport Google' });
});

/*
router.get('/info', function(request, response) {
    console.log("Info called");
    console.log("Auth: " + request.isAuthenticated('google'));
    response.send({
        result : "Success",
        authenticated : request.isAuthenticated()
    });
});


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:30025/auth/google/return',
    realm: 'http://localhost:30025/'
  },
  function(identifier, profile, done) {
    console.log('Google Strategy');
    process.nextTick(function () {      
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));

router.get('/auth/google', passport.authenticate('google', {
    failureRedirect : '/login'
}), function(req, res) {
    response.redirect('/');
});

router.get('/auth/google/return', passport.authenticate('google', {
    failureRedirect : '/login'
}), function(request, response) {
    response.redirect('/');
});

router.get('/auth/logout', function(request, response) {
    console.log("Logout called");
    request.logout();
    response.redirect('/LogIn');
});
*/
module.exports = router;
