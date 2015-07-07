/**
 * Created by xuewenwen on 6/8/2015.
 */
(function() {

    var app = angular.module('elvenApp', []);

    app.controller('MainController', function(commentFactory) {

        var mainController = this;

        mainController.newComment = function() {
            commentFactory.newComment(mainController.scientist, mainController.newCommentText);
        };

        mainController.updateComment = function() {
            commentFactory.updateComment(mainController.scientist);
        };

        mainController.selectScientist = function(scientist) {
            commentFactory.getScientistById(scientist.id, mainController)
        };

        mainController.selectComment = function(comment) {
            mainController.comment = comment;
        };

        mainController.insertValidCollection = function() {
            commentFactory.insertValidCollection();
        };

        mainController.emptyCollection = function() {
            commentFactory.emptyCollection();
        };

        mainController.deleteComment = function() {
            commentFactory.deleteComment(mainController.scientist, mainController.comment);
        };


        commentFactory.getScientists(mainController);
        console.log(mainController.scientists);
    });

})();