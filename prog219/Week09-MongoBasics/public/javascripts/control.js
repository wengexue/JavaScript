/**
 * Created by wenge.xue on 6/1/2015.
 */

(function() {

    var app = angular.module('elvenApp', []);

    app.controller('MongoController', function($http, mongoFactory) {

        var mongoController = this;

        mongoController.currentItem = 0;

        $http.get('/all-data').success(function(data) {
            mongoController.allData = data;
            mongoController.scientistsLength = data.allData.length;
        }).error(function(err) {
            console.log(err);
        });

        mongoController.getScientist = function(index) {
            mongoFactory.getScientist(index, mongoController);
        };

        mongoController.saveCurrentDocument = function() {
            mongoFactory.postDocument("/save", mongoController);
        };

        mongoController.insertDocument = function() {
            mongoFactory.postDocument("/insert", mongoController);
        };

        mongoController.indexChange = function() {
            if(typeof mongoController.currentItem !== 'undefined') {
                mongoFactory.getScientist(mongoController.currentItem, mongoController);
            }
        };
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