define(function(require) {
    
    var Utilities = {
        errorHandler: function(fx, status, error) {
            $('#debug01').html(fx.responseText);
            $('#debug02').html('error' + error);
        }
    };
    
    return Utilities;
});