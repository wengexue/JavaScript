/**
 * Created by xuewenwen on 6/12/2015.
 */
var express = require('express');
var router = express.Router();

var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
};

module.exports = function(passport) {
    router.get('/', function(req, res) {
        res.render('index', {title: "sign in"});
    });

    /*
     router.post('/login', passport.authenticate('login', {
     successRedirect: '/#/home',
     failureRedirect: '/'
     })); */

    router.post('/login', passport.authenticate('login'),
        function(req, res) {
            res.send(req.user);
        });

    router.get('/signup', function(req, res) {
        res.render('register', {});
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    }));

    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res) {
        res.render('home', {user: req.user});
    });

    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
};