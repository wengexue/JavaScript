'use strict';

/**
 * @ngdoc function
 * @name week02AngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the week02AngularApp
 */
angular.module('week02AngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
