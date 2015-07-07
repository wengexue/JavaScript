'use strict';

/**
 * @ngdoc function
 * @name week04AngularDirectivesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the week04AngularDirectivesApp
 */
var app = angular.module('week04AngularDirectivesApp')
app.controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.marie = {
    firstName: 'Marie',
    lastName: 'Curie',
    city: 'Paris',
    country: 'France'
  };

})

app.directive('bar', function () {
  return {
    link: function () {
      console.log('bar')
    }
  };
});


app.directive('elfMarie', function () {
  return {
    template: 'First Name: {{marie.firstName}} ' +
    '<br>Last Name: {{marie.lastName}}' +
    '<br>City: {{marie.city}}' +
    '<br>Country:{{marie.country}}'
  };
});

app.directive('ngSparkline', function() {
  return {
    restrict: 'A',
    require: '^ngModel',
    scope: {
      ngModel: '='
    },
    template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>'
  }
});
