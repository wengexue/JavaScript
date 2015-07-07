/**
 * Created by bcuser on 2/19/15.
 */

var About = (function() {
    function About() {
        // Code to initialize button handler (click) goes here.
        $("#aboutButton").click(function(){
            $("#info").html("<strong style='color: #00A000 '>This is about page! Well come to about page.</strong>");
        });
    }

    return About;
})();

$(document).ready(function(){
    var about = new About();

})