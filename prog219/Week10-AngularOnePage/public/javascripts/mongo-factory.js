/**
 * Created by wenge.xue on 6/1/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.factory('mongoFactory', function($http) {

        var mongoFactory = {

            currentId: null,

            allData: null,

            getMusicians: function(controller) {
                $http.get('/all-data').success(function(data) {
                    controller.musiciansLength = data.allData.length;
                    mongoFactory.allData = data.allData;
                    mongoFactory.currentId = data.allData[0]._id;
                    allDataNames = data.allData.map(function(musician) {
                        return {id: musician._id, name: musician.firstName + ' ' + musician.lastName, genre: musician.genre};
                    });
                    controller.allData = allDataNames;
                    mongoFactory.getMusicianById(mongoFactory.currentId, controller);
                }).error(function() {
                    console.log("error");
                });
            },

            report: function(data, status, headers, config) {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            },


            postDocument: function(route, controller) {
                var musician = {
                    id: controller.data._id,
                    firstName: controller.data.firstName,
                    lastName: controller.data.lastName,
                    genre: controller.data.genre
                };
                $http.post(route, musician)
                    .success(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    }).error(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    });
            },

            postSubjects: function(initId, subjects) {
                var subjectsUpdate = {
                    id: initId,
                    subjects: subjects
                };
                $http.post('/updateSubjects', subjectsUpdate)
                    .success(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    }).error(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    });
            },

            postComments: function(initId, comments) {
                var commentsUpdate = {
                    id: initId,
                    comments: comments
                };
                $http.post('/updateComments', commentsUpdate)
                    .success(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    }).error(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    });
            },


            getMusicianById: function(id, controller) {
                mongoFactory.currentId = id;
                var items = mongoFactory.allData.filter(function(musician) {
                    return musician._id === id;
                });
                return controller.data = items[0];
            }
        };
        return mongoFactory;
    });

})();