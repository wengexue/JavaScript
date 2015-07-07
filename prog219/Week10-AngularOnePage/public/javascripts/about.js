/**
 * Created by xuewenwen on 6/3/2015.
 */
(function() {

    var app = angular.module('elvenApp');

    app.controller('AboutController', function($http, mongoFactory) {
        var aboutController = this;

        aboutController.hint = "About Document";
    });

})();