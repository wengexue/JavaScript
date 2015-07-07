/**
 * Created by bcuser on 2/19/15.
 */

function setActiveMenuItem() {
    $(".nav li").removeClass("active");

    // var menuItem = $('a[href=".' + this.location.pathname + '"]');
    var name = this.location.pathname;
    var name = name.slice(1, name.length).trim();
    if (name.length === 0) { name = 'home'; }
    var menuItem1 = $('#' + name);

    menuItem1.addClass('active');
}

var Main = (function() {
    function Main() {
        // Code to initialize button handler (click) goes here.
        $("#mainButton").click(function(){
            $("#displayInfo").html("<strong style='color: #A00000'>Hello world! Well come to home page.</strong>");
        });
    }

    return Main;
})();


$(document).ready(function(){
    setActiveMenuItem();
    var myMain = new Main();
});