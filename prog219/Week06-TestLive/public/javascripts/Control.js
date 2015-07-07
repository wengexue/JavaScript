/**
 * Created by charlie on 5/7/15.
 */

(function () {

    var app = angular.module('elvenApp', []);

    app.controller('MyController', function ($scope, $http) {
        var myController = this;
        myController.hint = 'Bar';


        myController.loadJson = function (fileName) {

            var getDataJson = $http.get(fileName);

            getDataJson.success(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                myController.data = data;
            });

            getDataJson.error(function (data, status, headers, config) {
                console.log(data, status, headers, config);
                throw new Error('Oh no! An Error!');
            });
        };

        // Using dot syntax
        myController.loadJson02 = function (fileName) {
            $http.get(fileName)
                .success(function (data, status, headers, config) {
                    myController.data2 = data;
                })
                .error(function (data, status, headers, config) {
                    throw new Error('Oh no! An Error!');
                });
        };
    });

})();