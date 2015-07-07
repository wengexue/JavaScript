/**
 * Created by wenge.xue on 6/1/2015.
 */

(function() {

    var app = angular.module('elvenApp');

    app.controller('MongoController', function($http, mongoFactory) {

        var mongoController = this;


        mongoController.getScientist = function(index) {
            mongoFactory.getScientist(index, mongoController);
        };


        mongoController.selectScientist = function(scientist) {
            mongoFactory.getScientistById(scientist.id, mongoController);
        };

        mongoFactory.getScientists(mongoController);

    });

    app.directive('elfMarie', function(mongoFactory) {
        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template:
            'First: {{mongoController.data.firstName}} ' +
            '<br>Last: {{mongoController.data.lastName}}' +
            '<br>Subject: {{mongoController.data.subject}}'
        };
    });


})();