/**
 * Created by charlie on 5/7/15.
 */

(function () {

    var app = angular.module('elfApp', ['Music']);

    app.controller('MyController', function($sce, musicians, $http) {
        var myController = this;
        myController.hint = 'MyController';
        myController.beethoven = { "firstName": "Unknown", "lastName": 'Unknown', genre: 'Unknown' };

        myController.loadMusicians = function() {
            musicians.query({}, function(musicians) {
                myController.musicians = musicians;
                myController.musiciansLength = musicians.length;
                //myController.firstName = musicians[0].firstName;
                //myController.lastName = musicians[0].lastName;
                //myController.genre = musicians[0].genre;
                myController.currentItem = 0;
                myController.indexChange();
                myController.loadDocument();
                console.log(musicians[0].firstName);
                console.log(musicians[0].lastName);
                //console.log(musicians[0].getFirstName());
            });
        };

        myController.getBeethoven = function() {
            var beethoven = myController.musicians[0].getTopic("Ludwig", function(beethoven) {
                myController.beethoven = beethoven[0];
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

        myController.newMusician = function() {
            var newData = {
                "firstName": myController.firstName,
                "lastName": myController.lastName,
                "genre": myController.genre
            };
            myController.musicians[myController.currentItem].add(newData, function(musician) {
                myController.musicians.push(musician);
                myController.musiciansLength = myController.musicians.length;
                myController.currentItem = 0;
                myController.indexChange();
            });
        };

        myController.deleteRow = function() {
            var currentItem = myController.currentItem;
            myController.musicians[currentItem].remove(
                function(deletedObject, headers) {
                    myController.musicians.splice(currentItem, 1);
                    myController.musiciansLength = myController.musicians.length;
                    myController.currentItem = 0;
                    myController.indexChange();
                }, function(err) {
                    console.log("error: " + err.data.message);
                });
        };

        myController.updateRow = function() {
            var indexOfItemToUpdate = myController.currentItem;
            myController.musicians[indexOfItemToUpdate].firstName = myController.firstName;
            myController.musicians[indexOfItemToUpdate].lastName = myController.lastName;
            myController.musicians[indexOfItemToUpdate].genre = myController.genre;
            myController.musicians[indexOfItemToUpdate].updateDocument(function(data) {
                console.log("success: " + data);
                myController.loadDocument();
            }, function(err) {
                console.log("Error Status: " + err.status + ' ' + err.data.message);
            });
        };

        myController.indexChange = function() {
            myController.firstName = myController.musicians[myController.currentItem].firstName;
            myController.lastName = myController.musicians[myController.currentItem].lastName;
            myController.genre = myController.musicians[myController.currentItem].genre;
            this.loadDocument();
        };

        myController.loadDocument = function() {
            $http.get('/' + myController.genre.toLowerCase())
                .success(function(document, status, headers, config) {
                    myController.document = $sce.trustAsHtml(document);
                })
                .error(function(data, status, headers, config) {
                    alert("Somethings wrong");
                });
        };

    });

    app.directive('elfMarie', function(musicians) {
        return {
            controller: 'MyController',
            controllerAs: 'myController',
            template:
            'First: {{myController.beethoven.firstName}} ' +
            '<br>Last: {{myController.beethoven.lastName}}' +
            '<br>genre: {{myController.beethoven.genre}}'
        };
    });

})();