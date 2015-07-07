/**
 * Created by xuewenwen on 6/8/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.factory('commentFactory', function($http) {

        var mongoFactory = {

            allData: null,

            currentId: null,

            getScientists: function(controller) {
                $http.get('/all-data').success(function(data) {
                    if (data.allData.length > 0) {
                        mongoFactory.allData = data.allData;
                        allDataNames = data.allData.map(function(scientist) {
                            return {id: scientist._id, name: scientist.firstName + ' ' + scientist.lastName};
                        });
                        controller.scientists = allDataNames;
                        mongoFactory.getScientistById(allDataNames[0].id, controller);
                    }
                }).error(function() {
                    console.log("error");
                });

            },

            newComment: function(scientist, text) {
                var comment = {
                    commentText: text,
                    date: new Date().toJSON().slice(0, 10)
                };
                if (scientist.comments === null) {
                    scientist.comments = [];
                }
                var payLoad = {scientist: scientist, comment: comment};
                $http.post('/newComment', payLoad).success(function(result) {
                    console.log(result.data.comments[result.data.comments.length - 1]._id);
                    scientist.comments.push(result.data.comments[result.data.comments.length - 1]);
                }).error(function(err) {
                    console.log(err);
                });
            },

            updateComment: function(scientist) {
                var payLoad = {id: scientist._id, comments: scientist.comments};
                $http.post('/updateComments', payLoad).success(function(result) {
                    console.log(result.electionObject);
                }).error(function(err) {
                    console.log(err);
                });
            },

            getScientistById: function(id, controller) {
                mongoFactory.currentId = id;
                var items = mongoFactory.allData.filter(function(scientist) {
                    return scientist._id === id;
                });
                return controller.scientist = items[0];
            },

            insertValidCollection: function() {
                $http.post('/insertValidCollection', {}).success(function(result) {
                    console.log(result);
                }).error(function() {
                    console.log(err);
                });
            },

            emptyCollection: function() {
                $http.post('/emptyCollection', {}).success(function(result) {
                    console.log(result);
                }).error(function(err) {
                    console.log(err);
                });
            },

            deleteComment: function(scientist, comment) {
                $http.post('/deleteComment', {scientist: scientist, comment: comment}).success(function(result) {
                    console.log(result);
                    scientist.comments = result.update.comments;
                }).error(function(err) {
                    console.log(err);
                });
            }
        };

        return mongoFactory;
    });

})();