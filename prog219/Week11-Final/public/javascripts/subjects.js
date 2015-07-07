/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('SubjectsController', function($http, mongoFactory) {
        var subjectsController = this;

        subjectsController.hint = "Edit Document";

        mongoFactory.getMusicianById(mongoFactory.currentId, subjectsController);

        subjectsController.addItem = function() {
            subjectsController.data.subjects.push(subjectsController.newSubject);
            subjectsController.newSubject="";
        };

        subjectsController.saveItems = function() {
            mongoFactory.postSubjects(subjectsController.data._id,
                subjectsController.data.subjects);
        };

        subjectsController.selectSubject = function(subject) {
            subjectsController.selectedSubject = subject;
        };

        subjectsController.deleteSelected = function(subject) {
            subjectsController.data.subjects.splice((subjectsController.data.subjects.indexOf(subjectsController.selectedSubject)),1);
            subjectsController.selectedSubject="";
        };

        function getMusician() {
            mongoFactory.getMusicianById(mongoFactory.currentId, subjectsController);
        }

        getMusician();
    });

})();