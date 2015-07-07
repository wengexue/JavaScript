/**
 * Created by wenge.xue on 6/1/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.factory('mongoFactory', function($http) {

        var mongoFactory = {

            currentId: null,

            allData: null,

            getScientists: function(controller) {
                $http.get('/all-data').success(function(data) {
                    controller.scientistsLength = data.allData.length;
                    mongoFactory.allData = data.allData;
                    mongoFactory.currentId = data.allData[0]._id;
                    allDataNames = data.allData.map(function(scientist) {
                        return {id: scientist._id, name: scientist.firstName + ' ' + scientist.lastName};
                    });
                    controller.allData = allDataNames;
                    mongoFactory.getScientistById(mongoFactory.currentId, controller);
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
                var scientist = {
                    id: controller.data._id,
                    firstName: controller.data.firstName,
                    lastName: controller.data.lastName,
                    subject: controller.data.subject
                };
                $http.post(route, scientist)
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
                var subjectsUpdate = {
                    id: initId,
                    comments: comments
                };
                $http.post('/updateComments', subjectsUpdate)
                    .success(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    }).error(function(data, status, headers, config) {
                        mongoFactory.report(data, status, headers, config);
                    });
            },


            getScientistById: function(id, controller) {
                mongoFactory.currentId = id;
                var items = mongoFactory.allData.filter(function(scientist) {
                    return scientist._id === id;
                });
                return controller.data = items[0];
            }
        };
        return mongoFactory;
    });

})();