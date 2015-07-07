/**
 * Created by charlie on 5/11/2015.
 */

angular.module('elvenApp').factory('ScienceFacade', function(SimpleScienceData) {

    return {
        hint: "ScienceFacade",

        count: 0,

        getAll: function() {
            return SimpleScienceData.getScienceData();
        },
        getTopic: function() {
            return [];
        },
        getSubtopicsFromTopic: function() {
            return [];
        },
        delete: function() {
            return this.count;
        },
        add: function() {
            return this.count;
        },
        update: function() {
            return true;
        }
    }
});
