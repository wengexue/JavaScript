/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('CommentsController', function($http, mongoFactory) {
        var commentsController = this;

        mongoFactory.getMusicianById(mongoFactory.currentId, commentsController);

        commentsController.updateCurrentComments = function () {
            mongoFactory.postComments(commentsController.data._id,
                commentsController.data.comments);
        };

        commentsController.hint = "Comments Document";
    });

})();