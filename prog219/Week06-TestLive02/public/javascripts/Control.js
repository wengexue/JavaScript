/**
 * Created by charlie on 5/7/15.
 */

(function () {

    var app = angular.module('elvenApp', ['Science']);

    app.controller('MyController', function($sce, scientists, $http) {
        var myController = this;
        myController.hint = 'MyController';
        myController.marie = { "firstName": "Unknown", "lastName": 'Unknown', subject: 'Unknown' };

        myController.loadScientists = function() {
            scientists.query({}, function(scientists) {
                myController.scientists = scientists;
                myController.scientistsLength = scientists.length;
                myController.firstName = scientists[0].firstName;
                myController.lastName = scientists[0].lastName;
                myController.subject = scientists[0].subject;
                myController.currentItem = 0;
                console.log(scientists[0].firstName);
                console.log(scientists[0].lastName);
                console.log(scientists[0].getFirstName());
            });
        };

        myController.getMarie = function() {
            var maries = myController.scientists[0].getTopic("Marie", function(maries) {
                myController.marie = maries[0];
            });
        };

        myController.loadJson = function (fileName) {

            var getDataJson = $http.get(fileName);

            getDataJson.success(function (data, status, headers, config) {
                // console.log(data, status, headers, config);
                console.log("LoadJson called");
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

        myController.newScientist = function() {
            var newData = {
                "firstName": myController.firstName,
                "lastName": myController.lastName,
                "subject": myController.subject
            };
            myController.scientists[myController.currentItem].add(newData, function(scientist) {
                myController.scientists.push(scientist);
                myController.scientistsLength = myController.scientists.length;
            });
        };

        myController.deleteRow = function() {
            var currentItem = myController.currentItem;
            myController.scientists[currentItem].remove(
                function(deletedObject, headers) {
                    myController.scientists.splice(currentItem, 1);
                    myController.scientistsLength = myController.scientists.length;
                }, function(err) {
                    console.log("error: " + err.data.message);
                });
        };

        myController.updateRow = function() {
            var indexOfItemToUpdate = myController.currentItem;
            myController.scientists[indexOfItemToUpdate].firstName = myController.firstName;
            myController.scientists[indexOfItemToUpdate].lastName = myController.lastName;
            myController.scientists[indexOfItemToUpdate].subject = myController.subject;
            myController.scientists[indexOfItemToUpdate].updateDocument(function(data) {
                console.log("success: " + data);
            }, function(err) {
                console.log("Error Status: " + err.status + ' ' + err.data.message);
            });
        };

        myController.indexChange = function() {
            myController.firstName = myController.scientists[myController.currentItem].firstName;
            myController.lastName = myController.scientists[myController.currentItem].lastName;
            myController.subject = myController.scientists[myController.currentItem].subject;
            this.loadDocument();
        };

        myController.loadDocument = function() {
            $http.get('/' + myController.subject.toLowerCase())
                .success(function(document, status, headers, config) {
                    myController.document = $sce.trustAsHtml(document);
                })
                .error(function(data, status, headers, config) {
                    alert("Somethings wrong")
                });
        }

    });

    app.directive('elfMarie', function(scientists) {
        return {
            controller: 'MyController',
            controllerAs: 'myController',
            template:
            'First: {{myController.marie.firstName}} ' +
            '<br>Last: {{myController.marie.lastName}}' +
            '<br>City: {{myController.marie.subject}}'
        };
    });

})();