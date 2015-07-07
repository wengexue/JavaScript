/**
 * Created by wenge.xue on 6/1/2015.
 */

(function() {

    var app = angular.module('elvenApp');

    app.controller('MongoController', function($sce, $http, mongoFactory) {

        var mongoController = this;


        mongoController.getMusician = function(index) {
            mongoFactory.getMusician(index, mongoController);
        };


        mongoController.selectMusican = function(musician) {
            mongoFactory.getMusicianById(musician.id, mongoController);
            mongoController.loadDocument();
        };

        mongoController.loadDocument = function() {
            $http.get('/MusicInfo/' + mongoController.data.genre.toLowerCase())
                .success(function(document) {
                    mongoController.document = $sce.trustAsHtml(document);
                })
                .error(function() {
                    alert("Somethings wrong");
                });
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