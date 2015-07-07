/**
 * Created by bcuser on 3/21/15.
 */

var elf = {};

elf.Utility = {

    showMessage: function(message) {
        $('#debug').append('<li>' + message + '</li>');
    },
    runGeo: function() {
        var geo = new elf.Geo();
        geo.run();
    }
};