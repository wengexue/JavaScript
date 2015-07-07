/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('EditController', function ($http, mongoFactory) {
        var editController = this;

        editController.hint = "Edit Document";

        mongoFactory.getScientistById(mongoFactory.currentId, editController);

        editController.saveCurrentDocument = function () {
            mongoFactory.postDocument("/save", editController);
        };

        editController.insertDocument = function () {
            mongoFactory.postDocument("/insert", editController);
        };



    });


})();



