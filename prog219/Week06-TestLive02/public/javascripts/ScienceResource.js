/**
 * Created by wenge.xue on 5/13/2015.
 */
angular.module('Science', ['ngResource'])

    .constant('CONFIG', {
        DB_NAME: 'prog219-xue',
        COLLECTION: 'scientists',
        API_KEY: '0KajfUUa8f_rfDzZFQVktXl0ASZmoljM'
    })

    .factory('scientists', function ($resource, CONFIG) {
        console.log('Scientists factory called');

        var scientists = $resource(
            'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
            '/collections/' + CONFIG.COLLECTION + '/:id', {
                apiKey: CONFIG.API_KEY
            },
            {
                update: {method: 'PUT'}
            });

        scientists.prototype.getTopic = function(firstNameToFind, callback) {
            bar = $resource(
                'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
                '/collections/' + CONFIG.COLLECTION, {
                    apiKey: CONFIG.API_KEY,
                    q: {"firstName": firstNameToFind }
                });
            return bar.query({}, callback);
        };

        scientists.prototype.getFirstName = function () {
            return this.firstName;
        };

        scientists.prototype.getLastName = function () {
            return this.lastName;
        };

        scientists.prototype.getSubject = function () {
            return this.subject;
        };


        scientists.prototype.add = function(newData, callback) {
            var scientistResource = new scientists(newData);
            scientistResource.$save(callback);
        };

        scientists.prototype.updateDocument = function (successCallback, errorCallback) {
            console.log("update called");
            var idObject = {id: this._id.$oid};
            var updateData = angular.extend({}, this, {_id:undefined});
            scientists.update(
                idObject,
                updateData,
                successCallback,
                errorCallback);
        };

        scientists.prototype.remove = function (successCallback, errorCallback) {
            scientists.remove({id:this._id.$oid}, successCallback, errorCallback);
        };

        return scientists;
    });
