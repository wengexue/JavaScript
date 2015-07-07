/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('CommentsController', function($http, mongoFactory) {
        var commentsController = this;

        commentsController.hint = "Comments Document";
    });

})();