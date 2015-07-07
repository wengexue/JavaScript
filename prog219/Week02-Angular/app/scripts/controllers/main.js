'use strict';

/**
 * @ngdoc function
 * @name week02AngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the week02AngularApp
 */
angular.module('week02AngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
