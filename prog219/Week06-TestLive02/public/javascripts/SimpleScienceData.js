/**
 * Created by charlie on 5/11/2015.
 */

(function() {

    angular.module('Science').factory('SimpleScienceData', function() {
        var rows = [{
            "_id": {"$oid": "5543bd3be4b000be4aa7b108"},
            "firstName": "Marie",
            "lastName": "Curie",
            "subject": "Radioactivity"
        }, {
            "_id": {"$oid": "5543cf1de4b0c2a1ea77f3a5"},
            "firstName": "Albert",
            "lastName": "Einstein",
            "subject": "Physics"
        }, {
            "_id": {"$oid": "5543d02ae4b0c2a1ea77f4ca"},
            "firstName": "Isaac",
            "lastName": "Newton",
            "subject": "Astronomy"
        }];

        return {
            count: rows.length,

            getScientists: function() {
                // We clone it so that we don't touch the original array;
                // This simulates a database where we don't touch data in DB.
                var rowsCopy = JSON.stringify(rows);
                return JSON.parse(rowsCopy);
            },

            insert: function(newRow) {
                newRow._id = {"$oid": this.generateUUID() };
                rows.push(newRow);
                var rowCopy = JSON.stringify(newRow);
                return JSON.parse(rowCopy);
            },

            generateUUID: function() {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            },

            update: function(newRow) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i]._id.$oid == newRow._id.$oid) {
                        rows[i].firstName = newRow.firstName;
                        rows[i].lastName = newRow.lastName;
                        rows[i].subject = newRow.subject;
                        return true;
                    }
                }
            },

            delete: function(id, newRow) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i]._id.$oid == id.$oid) {
                        rows.splice(i, 1);
                        return;
                    }
                }
            }

        }
    });

})();

