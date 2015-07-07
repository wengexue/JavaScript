/**
 * Created by wenge.xue on 4/29/2015.
 */
angular.module('elvenApp', ['pres'])
    .controller('MyController', function($scope, $http, scientists) {
        $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";

        $scope.loadScientists = function() {
            $scope.scientists = scientists.query({}, function(scientists) {
                $scope.scientistsLength = scientists.length;
                $scope.firstName = scientists[0].firstName;
                $scope.lastName = scientists[0].lastName;
                $scope.city = scientists[0].city;
                $scope.country = scientists[0].country;
                $scope.subject = scientists[0].subject;
                console.log(scientists[0].firstName);
                console.log(scientists[0].lastName);
                console.log(scientists[0].getFirstName());
                $scope.currentItem = 0;
            });
        };
        $scope.newScientist = function() {
            var scientistResource = new scientists({
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                subject: $scope.subject,
                city: $scope.city,
                country: $scope.country
            });
            scientistResource.$save(function(scientist) {
                $scope.scientists.push(scientist);
                $scope.scientistsLength = $scope.scientists.length;
                $scope.currentItem = 0;
                $scope.indexChange();
            });
        };
        $scope.deleteRow = function() {
            var currentItem = $scope.currentItem;
            $scope.scientists[currentItem].remove(
                function(deletedObject, headers) {
                    $scope.scientists.splice(currentItem, 1);
                    $scope.scientistsLength = $scope.scientists.length;
                }, function(err) {
                    console.log("error: " + err.data.message);
                });
            $scope.currentItem = 0;
            $scope.indexChange();
        };
        //$scope.updateRow = function() {
        //    var currentItem = $scope.currentItem;
        //    $scope.scientists[currentItem].firstName = $scope.firstName;
        //    $scope.scientists[currentItem].lastName = $scope.lastName;
        //    $scope.scientists[currentItem].city = $scope.city;
        //    $scope.scientists[currentItem].country = $scope.country;
        //    $scope.scientists[currentItem].subject = $scope.subject;
        //    $scope.scientists[currentItem].$save(function(scientist){
        //        $scope.currentItem = 0;
        //        $scope.indexChange();
        //    });
        //};

        $scope.updateRow = function() {
            var currentItem = $scope.currentItem;
            $scope.scientists[currentItem].firstName = $scope.firstName;
            // You write the code to handle lastName and subject.
            $scope.scientists[currentItem].lastName = $scope.lastName;
            $scope.scientists[currentItem].city = $scope.city;
            $scope.scientists[currentItem].country = $scope.country;
            $scope.scientists[currentItem].subject = $scope.subject;
            $scope.scientists[currentItem].updateDocument(function(data) {
                console.log("success: " + data);
            }, function(err) {
                console.log("Error Status: " + err.status + ' ' + err.data.message);
            });
            $scope.currentItem = 0;
            $scope.indexChange();
        };

        $scope.indexChange = function() {
            $scope.firstName = $scope.scientists[$scope.currentItem].firstName;
            $scope.lastName = $scope.scientists[$scope.currentItem].lastName;
            $scope.city = $scope.scientists[$scope.currentItem].city;
            $scope.country = $scope.scientists[$scope.currentItem].country;
            $scope.subject = $scope.scientists[$scope.currentItem].subject;
        };

    });