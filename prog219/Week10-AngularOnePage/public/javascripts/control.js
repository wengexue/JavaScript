/**
 * Created by wenge.xue on 6/1/2015.
 */

(function() {

    var app = angular.module('elvenApp');

    app.controller('MongoController', function($http, mongoFactory) {

        var mongoController = this;


        mongoController.getMusician = function(index) {
            mongoFactory.getMusician(index, mongoController);
        };


        mongoController.selectMusican = function(musician) {
            mongoFactory.getMusicianById(musician.id, mongoController);
        };

        mongoFactory.getMusicians(mongoController);

    });

/*    app.directive('elfMarie', function(mongoFactory) {
        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template:
            'First: {{mongoController.data.firstName}} ' +
            '<br>Last: {{mongoController.data.lastName}}' +
            '<br>Genre: {{mongoController.data.genre}}'
        };
    });*/


})();