/**
 * Created by wenge.xue on 5/13/2015.
 */
angular.module('Music', ['ngResource'])

    .constant('CONFIG', {
        DB_NAME: 'prog219-xue',
        COLLECTION: 'musicians',
        API_KEY: '0KajfUUa8f_rfDzZFQVktXl0ASZmoljM'
    })

    .factory('musicians', function ($resource, CONFIG) {
        console.log('Musicians factory called');

        var musicians = $resource(
            'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
            '/collections/' + CONFIG.COLLECTION + '/:id', {
                apiKey: CONFIG.API_KEY
            },
            {
                update: {method: 'PUT'}
            });

        musicians.prototype.getTopic = function(firstNameToFind, callback) {
            bar = $resource(
                'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
                '/collections/' + CONFIG.COLLECTION, {
                    apiKey: CONFIG.API_KEY,
                    q: {"firstName": firstNameToFind }
                });
            return bar.query({}, callback);
        };

        musicians.prototype.getFirstName = function () {
            return this.firstName;
        };

        musicians.prototype.getLastName = function () {
            return this.lastName;
        };

        musicians.prototype.getSubject = function () {
            return this.genre;
        };


        musicians.prototype.add = function(newData, callback) {
            var scientistResource = new musicians(newData);
            scientistResource.$save(callback);
        };

        musicians.prototype.updateDocument = function (successCallback, errorCallback) {
            console.log("update called");
            var idObject = {id: this._id.$oid};
            var updateData = angular.extend({}, this, {_id:undefined});
            musicians.update(
                idObject,
                updateData,
                successCallback,
                errorCallback);
        };

        musicians.prototype.remove = function (successCallback, errorCallback) {
            musicians.remove({id:this._id.$oid}, successCallback, errorCallback);
        };

        return musicians;
    });
