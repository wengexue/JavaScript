/**
 * Created by xuewenwen on 6/12/2015.
 */
var app = angular.module('elvenApp');

app.controller('LoginController', function($http, $location) {
    var loginController = this;
    loginController.hint = "Sign in";

    loginController.update = function() {
        $http.post('/login/login/', {"username": loginController.userName, "password": loginController.password}).success(function(data) {
            $location.path('/');
        }).error(function(err) {
            loginController.hint = 'Bad Password/User. Try again';
        })
    }
});