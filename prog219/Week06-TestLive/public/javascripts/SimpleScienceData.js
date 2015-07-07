/**
 * Created by wenge.xue on 5/11/2015.
 */

angular.module('elvenApp')
    .factory('SimpleScienceData', function(){
        return {
            getScienceData: function () {
                return [
                    {
                    "_id": {"$oid": "5543bd3be4b000be4aa7b108"},
                    "firstName": "Marie",
                    "lastName": "Curie",
                    "subject": "Radioactivity"
                    },
                    {
                        "_id": {"$oid": "5543cf1de4b0c2a1ea77f3a5"},
                        "firstName": "Albert",
                        "lastName": "Einstein",
                        "subject": "Physics"
                    },
                    {
                        "_id": {"$oid": "5543d02ae4b0c2a1ea77f4ca"},
                        "firstName": "Isaac",
                        "lastName": "Newton",
                        "subject": "Science"
                    }]
            }
        }
    });