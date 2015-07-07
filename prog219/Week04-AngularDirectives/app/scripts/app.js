'use strict';

/**
 * @ngdoc overview
 * @name week04AngularDirectivesApp
 * @description
 * # week04AngularDirectivesApp
 *
 * Main module of the application.
 */
angular
  .module('week04AngularDirectivesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
