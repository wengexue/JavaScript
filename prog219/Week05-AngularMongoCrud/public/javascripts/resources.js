/**
 * Created by wenge.xue on 4/29/2015.
 */
/**
 * Created by charlie on 4/29/2015.
 */

angular.module('pres', ['ngResource'])
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

        scientists.prototype.getFirstName = function () {
            return this.firstName;
        };

        scientists.prototype.getLastName = function () {
            return this.lastName;
        };

        scientists.prototype.getSubject = function () {
            return this.subject;
        };

        scientists.prototype.remove = function (successCallback, errorCallback) {
            return scientists.remove({id:this._id.$oid}, successCallback, errorCallback);
        };

        scientists.prototype.updateDocument = function (successCallback, errorCallback) {
            console.log("update called");
            var idObject = {id:this._id.$oid};
            var updateData = angular.extend({}, this, {_id:undefined});
            scientists.update( idObject, updateData, successCallback, errorCallback );
        };

        return scientists;
    });