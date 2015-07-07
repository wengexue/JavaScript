/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('CommentsController', function($http, mongoFactory) {
        var commentsController = this;

        mongoFactory.getMusicianById(mongoFactory.currentId, commentsController);


        commentsController.newComment = function() {
            mongoFactory.newComment(commentsController.data, commentsController.newCommentText);
            commentsController.newCommentText="";
        };

        commentsController.updateComment = function() {
            mongoFactory.updateComment(commentsController.data);
        };

        commentsController.selectComment = function(comment) {
            commentsController.comment = comment;
        };


        commentsController.deleteComment = function() {
            mongoFactory.deleteComment(commentsController.data, commentsController.comment);
        };

    });

})();