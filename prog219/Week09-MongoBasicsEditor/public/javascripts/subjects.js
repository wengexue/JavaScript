/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('SubjectsController', function($http, mongoFactory) {
        var subjectsController = this;

        subjectsController.hint = "Edit Document";

        mongoFactory.getScientistById(mongoFactory.currentId, subjectsController);

        subjectsController.addItem = function() {
            subjectsController.data.subjects.push(subjectsController.newSubject);
        };

        subjectsController.saveItems = function() {
            mongoFactory.postSubjects(subjectsController.data._id,
                subjectsController.data.subjects);
        };

        subjectsController.deleteSelected = function() {

        };

        function getScientist() {
            mongoFactory.getScientistById(mongoFactory.currentId, subjectsController);
        }

        getScientist();
    });

})();