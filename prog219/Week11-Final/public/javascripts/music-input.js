/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.directive('musicShow', function() {
         return {
             controller: 'MongoController',
             controllerAs: 'mongoController',
             template:
                "<label>First Name:&nbsp; </label>{{mongoController.data.firstName}}&nbsp; &nbsp; &nbsp;"+
                "<label>Last Name:&nbsp; </label>{{mongoController.data.lastName}}&nbsp; &nbsp; &nbsp;"+
                "<label>Genre:&nbsp; </label>{{mongoController.data.genre}}"

         };
     });

/*
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
*/


})();

