/**
 * Created by charlie on 5/11/2015.
 */

angular.module('Music', []).factory('musicians', function(SimpleMusicData) {

    return {
        hint: "MusicFacade",

        count: SimpleMusicData.count,

        assignMethods: function(newData) {
            newData.remove = this.remove;
            newData.add = this.add;
            newData.assignMethods = this.assignMethods;
            newData.updateDocument = this.updateDocument;
            newData.getTopic = this.getTopic;
        },

        query: function(queryDetails, callback) {
            var rows = SimpleMusicData.getMusicians();

            for (var i = 0; i < rows.length; i++) {
                this.assignMethods(rows[i]);
            }

            if (callback) {
                callback(rows);
            }
            return rows;
        },

        getTopic: function(name, callback) {
            var filteredData = SimpleMusicData.getMusicians().filter(function(data) {
                return data.firstName === name;
            });
            callback(filteredData);
        },

        getSubtopicsFromTopic: function() {
            return []
        },

        remove: function(success, error) {
            SimpleMusicData.delete(this._id);
            if (success) {
                success();
            }
            return SimpleMusicData.count;
        },

        add: function(newData, callback) {
            var rowCopy = SimpleMusicData.insert(newData);
            this.assignMethods(rowCopy);
            if (callback) {
                callback(rowCopy);
            }
            return SimpleMusicData.count
        },

        updateDocument: function() {
            return SimpleMusicData.update(this);
        }
    }
})
;
