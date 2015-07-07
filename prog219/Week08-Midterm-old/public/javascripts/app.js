/**
 * Created by wenge.xue on 5/20/2015.
 */

var myModule = angular.module("elfApp", ['ngRoute', 'Music']);

myModule.config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
        templateUrl : "main",
        controller : "MyController",
        controllerAs: "myController"
    }).when('/about', {
        templateUrl : "about",
        controller : "AboutController",
        controllerAs: 'aboutController'
    }).otherwise({
        redirectTo : '/'
    });
});