/**
 * Created by wenge.xue on 4/29/2015.
 */
/**
 * Created by charlie on 4/29/2015.
 */

angular.module('pres', [])
    .constant('CONFIG', {
        DB_NAME: 'prog219-xue',
        COLLECTION: 'scientists',
        API_KEY: '0KajfUUa8f_rfDzZFQVktXl0ASZmoljM'
    })
    .factory('scientists', function ( CONFIG) {
        console.log('Scientists factory called');

        function scientists(){

        };

        scientists.prototype.query = function(){
            return [{
                firstName: "Marie",
                lastName: "Curie",
                city: "Paris",
                country: "France",
                subject: "Radiations"
            }];
        }

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


        return new scientists();
    });