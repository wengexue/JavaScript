/**
 * Created by charlie on 5/11/2015.
 */

(function () {

    angular.module('Music').factory('SimpleMusicData', function () {
        var rows = [{
            "_id": {"$oid": "55566a3de4b0eaf715120ac3"},
            "firstName": "Ludwig",
            "lastName": "Beethoven",
            "genre": "Classic"
        }, {
            "_id": {"$oid": "55566b10e4b097dcdbef3666"},
            "firstName": "Michael",
            "lastName": "Jackson",
            "genre": "Pop"
        }, {
            "_id": {"$oid": "55566ba6e4b097dcdbef375a"},
            "firstName": "Louis",
            "lastName": "Armstrong",
            "genre": "Jazz"
        }, {
            "_id": {"$oid": "55566c06e4b097dcdbef3960"},
            "firstName": "Elvis",
            "lastName": "Presley",
            "genre": "Rock"
        }, {
            "_id": {"$oid": "55566c41e4b097dcdbef39b2"},
            "firstName": "Wolfgang",
            "lastName": "Mozart",
            "genre": "Classic"
        }, {
            "_id": {"$oid": "55566f24e4b097dcdbef413c"},
            "firstName": "Bob",
            "lastName": "Dylan",
            "genre": "Blues"}];

        return {
            count: rows.length,

            getMusicians: function () {
                // We clone it so that we don't touch the original array;
                // This simulates a database where we don't touch data in DB.
                var rowsCopy = JSON.stringify(rows);
                return JSON.parse(rowsCopy);
            },

            insert: function (newRow) {
                newRow._id = {"$oid": this.generateUUID()};
                rows.push(newRow);
                var rowCopy = JSON.stringify(newRow);
                return JSON.parse(rowCopy);
            },

            generateUUID: function () {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            },

            update: function (newRow) {
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i]._id.$oid == newRow._id.$oid) {
                        rows[i].firstName = newRow.firstName;
                        rows[i].lastName = newRow.lastName;
                        rows[i].genre = newRow.genre;
                        return true;
                    }
                }
            },

            delete: function (id, newRow) {
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

