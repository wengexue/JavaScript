define([ 'jquery', 'Utilities' ], function(jq, utilities) {

    var DirName = (function() {

        function DirName() {
        }       

        DirName.prototype.getDirName = function() {
            $.getJSON('/NewPage/dirName', function(serverResponse) {
                $('#directory').html(serverResponse.dirName);
            }).error = errorHandler;
        };
        
        return DirName;
    }());
    
    return DirName;
});