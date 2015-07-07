/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('CommentsController', function($http, mongoFactory,commentFactory) {
        var commentsController = this;

        mongoFactory.getMusicianById(mongoFactory.currentId, commentsController);

        commentsController.newComment = function() {
            commentFactory.newComment(commentsController.data, commentsController.newCommentText);
            commentsController.newCommentText="";
        };

        commentsController.updateComment = function() {
            commentFactory.updateComment(commentsController.data);
        };

        commentsController.selectComment = function(comment) {
            commentsController.comment = comment;
        };


        commentsController.deleteComment = function() {
            commentFactory.deleteComment(commentsController.data, commentsController.comment);
        };

    });

})();