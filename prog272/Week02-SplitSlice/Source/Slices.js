/**
 * Created by charliecalvert on 1/13/15.
 */

exports.stringSlices = {

    getFirstThreeCharacters: function(value) {
        'use strict';
        return value.slice(0, 3);
    },
    getLastThreeCharacters: function(value) {
        'use strict';
        return value.slice(-3);
    },
    getMiddleThreeCharacters: function(value) {
        'use strict';
        var len = value.length;
        if (len < 3){
            return value.slice(0);
        }
        else if (len == 4)
            return value.slice(1);
        else if (len % 2 == 1)
            return value.slice(len / 2 - 1, (len / 2 - 1) + 3);
        else
            return value.slice(len-1 / 2, len-1 / 2 + 3);

    },
    getAllButFirstAndLast: function(value) {
        'use strict';
        return value.slice(1, -1);
    },
    getAllButFirstAndLastIfSame: function(value) {
        'use strict';
        if (value.slice(0,1)==value.slice(-1)){
            return value.slice(1,-1);
        }
        else
            return value.slice(0);
    }

};
