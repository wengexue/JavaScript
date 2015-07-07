/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.directive('scienceShow', function() {

        return {
            controller: 'MongoController',
            controllerAs: 'mongoController',
            template:
            'First: {{mongoController.data.firstName}} ' +
            '<br>Last: {{mongoController.data.lastName}}' +
            '<br>Topic: {{mongoController.data.subject}}'
        };
    });

    app.directive('scienceInput', function() {

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
            "<label class='col-sm-2 control-label'>Subject</label>" +
            "<div class='col-sm-4'>" +
            "<input type='text' class='form-control' ng-model='mongoController.data.subject'>" +
            "</div>"
        };
    });

})();