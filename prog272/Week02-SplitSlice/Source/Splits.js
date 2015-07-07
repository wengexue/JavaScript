/**
 * Created by charliecalvert on 1/13/15.
 */

exports.splits = {

    splitOnDash: function (value) {
        'use strict';
        return value.split('-');
    },

    splitOnTab: function (value) {
        'use strict';
        return value.split('\t');
    },

    splitOnSemicolon: function (value) {
        'use strict';
        return value.split(';');
    },

    splitOnNewLine: function (value) {
        'use strict';
        return value.split('\n');
    },

    splitOnComma: function (value) {
        'use strict';
        return value.split(',');
    },

    reverseString: function (value) {
        'use strict';
        var valueR = value.split('').reverse().join('');
        return valueR;
    },


    splitOnCommaWithSpace01: function (value) {
        'use strict';
        var split = value.split(',');
        return split.map(function (item) {
            return item.trim();
        });
    },

    splitOnCommaWithSpace02: function (value) {
        'use strict';
        return value.split(',').map(function (item) {
            return item.trim();
        });
    }
};
