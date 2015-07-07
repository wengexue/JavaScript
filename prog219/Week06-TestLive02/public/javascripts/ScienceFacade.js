/**
 * Created by charlie on 5/11/2015.
 */

angular.module('Science', []).factory('scientists', function(SimpleScienceData) {

    return {
        hint: "ScienceFacade",

        count: SimpleScienceData.count,

        assignMethods: function(newData) {
            newData.remove = this.remove;
            newData.add = this.add;
            newData.assignMethods = this.assignMethods;
            newData.updateDocument = this.updateDocument;
            newData.getTopic = this.getTopic;
        },

        query: function(queryDetails, callback) {
            var rows = SimpleScienceData.getScientists();

            for (var i = 0; i < rows.length; i++) {
                this.assignMethods(rows[i]);
            }

            if (callback) {
                callback(rows);
            }
            return rows;
        },

        getTopic: function(name, callback) {
            var filteredData = SimpleScienceData.getScientists().filter(function(data) {
                return data.firstName === name;
            });
            callback(filteredData);
        },

        getSubtopicsFromTopic: function() {
            return []
        },

        remove: function(success, error) {
            SimpleScienceData.delete(this._id);
            if (success) {
                success();
            }
            return SimpleScienceData.count;
        },

        add: function(newData, callback) {
            var rowCopy = SimpleScienceData.insert(newData);
            this.assignMethods(rowCopy);
            if (callback) {
                callback(rowCopy);
            }
            return SimpleScienceData.count
        },

        updateDocument: function() {
            return SimpleScienceData.update(this);
        }
    }
})
;
