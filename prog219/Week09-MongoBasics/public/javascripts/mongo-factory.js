/**
 * Created by wenge.xue on 6/1/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.factory('mongoFactory', function($http) {

        return {

            currentItem: 0,

            getScientists: function(mongoController) {
                $http.get('/all-data').success(function(data) {
                    mongoController.scientistsLength = data.allData.length;
                    allDataNames = data.allData.map(function(scientist) {
                        return {id: scientist._id, name: scientist.firstName + ' ' + scientist.lastName};
                    });
                    mongoController.allData = allDataNames;
                }).error(function() {
                    console.log("error");
                });
            },

            postDocument: function(route, mongoController) {
                var scientist = {
                    id: mongoController.data.id,
                    firstName: mongoController.data.firstName,
                    lastName: mongoController.data.lastName,
                    subject: mongoController.data.subject
                };
                $http.post(route, scientist).success(function(data, status, headers, config) {
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                }).error(function(data, status, headers, config) {
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                });
            },

            getScientist: function(index, mongoController) {
                this.currentItem = index;
                $http.get('/data/' + index).success(function(data) {
                    mongoController.data = data;
                }).error(function() {
                    console.log("error");
                });
            }
        };
    });

})();