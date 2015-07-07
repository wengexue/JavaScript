/**
 * Created by xuewenwen on 6/10/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.factory('commentFactory', function($http) {

        var commentFactory = {

            newComment: function(musician, text) {
                var comment = {
                    commentText: text,
                    date: new Date().toJSON().slice(0, 10)
                };
                if (musician.comments === null) {
                    musician.comments = [];
                }
                var payLoad = {musician: musician, comment: comment};
                $http.post('/comments/newComment', payLoad).success(function(result) {
                    console.log(result.data.comments[result.data.comments.length - 1]._id);
                    musician.comments.push(result.data.comments[result.data.comments.length - 1]);
                }).error(function(err) {
                    console.log(err);
                });
            },

            updateComment: function(musician) {
                var payLoad = {id: musician._id, comments: musician.comments};
                $http.post('/comments/updateComments', payLoad).success(function(result) {
                    console.log(result.electionObject);
                }).error(function(err) {
                    console.log(err);
                });
            },

            deleteComment: function(musician, comment) {
                $http.post('/comments/deleteComment', {musician: musician, comment: comment}).success(function(result) {
                    console.log(result);
                    musician.comments = result.update.comments;
                }).error(function(err) {
                    console.log(err);
                });
            }
        };
        return commentFactory;
    });

})();
