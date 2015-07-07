/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

/*    app.directive('musicShow', function() {

        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template:
            'First: {{mongoController.data.firstName}} ' +
            '<br>Last: {{mongoController.data.lastName}}' +
            '<br>Genre: {{mongoController.data.genre}}'
        };
    });*/

/*    app.directive('scienceInput', function() {
        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template: "<hr/>" +
            "<label class='col-sm-2 control-label'>First Name</label>" +
            "<div class='col-sm-4'>" +
            "<input type='text' class='form-control' ng-model='mongoController.data.firstName'>" +
            "</div>" +
            "<label class='col-sm-2 control-label'>Last Name</label>" +
            "<div class='col-sm-4'>" +
            "<input type='text' class='form-control' ng-model='mongoController.data.lastName'>" +
            "</div>" +
            "<label class='col-sm-2 control-label'>Genre</label>" +
            "<div class='col-sm-4'>" +
            "<input type='text' class='form-control' ng-model='mongoController.data.genre'>" +
            "</div>"
        };
    });*/

    app.directive('musicShow', function() {
         return {
             controller: 'MongoController',
             controllerAs: 'mongoController',
             template:
             "<form role='form'>"+
                 "<div class='form-group'>"+
                    "<div class='col-xs-3'>"+
                        "<label>First Name:</label>"+
                        "<input type='text' ng-model='mongoController.data.firstName' class='form-control' disabled />"+
                    "</div>"+
                     "<div class='col-xs-3'>"+
                         "<label>Last Name:</label>"+
                         "<input type='text' ng-model='mongoController.data.lastName' class='form-control' disabled />"+
                     "</div>"+
                     "<div class='col-xs-3'>"+
                        "<label>Genre:</label>"+
                        "<input type='text' ng-model='mongoController.data.genre' class='form-control' disabled />"+
                     "</div>"+
                 "</div>"+
             "</form>"
         };
     });

    app.directive('scienceInput', function() {

        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template:
            "<form role='form'>"+
                "<div class='form-group'>"+
                    "<div class='col-xs-3'>"+
                        "<label for='ex1'>First Name:</label>"+
                        "<input id='ex1' type='text' ng-model='mongoController.data.firstName' placeholder='first name' class='form-control'/>"+
                    "</div>"+
                    "<div class='col-xs-3'>"+
                        "<label for='ex2'>Last Name:</label>"+
                        "<input id='ex2' type='text' ng-model='mongoController.data.lastName' placeholder='last name' class='form-control'/>"+
                    "</div>"+
                    "<div class='col-xs-3'>"+
                        "<label for='ex3'>Genre:</label>"+
                        "<input id='ex3' type='text' ng-model='mongoController.data.genre' placeholder='genre' class='form-control'/>"+
                    "</div>"+
                "</div>"+
            "</form>"
        };
    });






})();

