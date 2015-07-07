require.config({
    paths: {
        "jquery": "jquery-2.1.1",
        "bootstrap": "bootstrap.min",
    },
    shim: {
        // Lots omitted here
        'bootstrap': {
            deps: ['jquery']
        }
    }
});


require(['bootstrap'],
    function(bootstrap) {
        'use strict';
        console.log("Main called");

    });
