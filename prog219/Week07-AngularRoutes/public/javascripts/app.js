/**
 * Created by wenge.xue on 5/20/2015.
 */

var myModule = angular.module("elfApp", [ 'ngRoute' ]);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "main",
        controller : "MainController",
        controllerAs: "mainController"
    }).when('/about', {
        templateUrl : "about",
        controller : "AboutController",
        controllerAs: 'aboutController'
    }).otherwise({
        redirectTo : '/'
    });
});