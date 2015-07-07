/**
 * Created by charliecalvert on 2/23/15.
 */


function initialize() {

    $("#insertMale").click(function(){
        insertMale();
    });

    $("#insertFemale").click(function(){
        insertFemale();
    });

    $("#clear").click(function(){
        clear();
    });

    $("#male").click(function(){
        $("#radioResult").text("clicked: male");
        $("#gender").text("Male");
    });

    $("#female").click(function(){
        $("#radioResult").text("clicked: female");
        $("#gender").text("Female");
    });

    $("#getJson").click(function(){
        getJson(display);
    });

    $("#getAjax").click(function(){
        getAjax(display);
    });

}

function getJson(callback){
    var result = $.getJSON('./Presidents.json', callback);
    result.fail(errorHandler);
}


function getAjax(callback){
    $.ajax({
        type: 'GET',
        url: 'Scientists.json',
        dataType: 'json',
        success: callback,
        error: errorHandler
    });
}

function display(result) {
    console.log(result);
    $("ul.list-group").empty();
    $.each(result, function(index, bar) {
        $("ul.list-group").append(
            '<li class="list-group-item">' +
            bar.firstName + ' ' +
            bar.lastName + '</li>');
    });
}


function errorHandler(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
}


function setActiveMenuItem() {
    $(".nav li").removeClass("active");

    // var menuItem = $('a[href=".' + this.location.pathname + '"]');
    var name = this.location.pathname;
    var name = name.slice(1, name.length).trim();
    if (name.length === 0) { name = 'home'; }
    var menuItem1 = $('#' + name);

    menuItem1.addClass('active');
}

$(document).ready(function() {
    //setActiveMenuItem();
    initialize();

});



function insertMale(){
    var male = ["Nikola","Tesla","Smiljan","NY",32211,32];
    $("#inputFirstName").val(male[0]);
    $("#inputLastName").val(male[1]);
    $("#inputCity").val(male[2]);
    $("#inputState").val(male[3]);
    $("#inputZip").val(male[4]);
    $("#inputAge").val(male[5]);
    $("#male").prop("checked", true);
    $("#getAll").prop('disabled', false);
    getAll();
}

function insertFemale(){
    var female = ["Marie","Curie","Passy","CA",21122,32];
    $("#inputFirstName").val(female[0]);
    $("#inputLastName").val(female[1]);
    $("#inputCity").val(female[2]);
    $("#inputState").val(female[3]);
    $("#inputZip").val(female[4]);
    $("#inputAge").val(female[5]);
    $("#female").prop("checked", true);
    $("#getAll").prop('disabled', false);
    getAll();
}

function clear(){
    $("#inputFirstName").val("");
    $("#inputLastName").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputZip").val("");
    $("#male").prop("checked", false);
    $("#female").prop("checked", false);
    $("#name").text("");
    $("#address").text("");
    $("#age").text("");
    $("#gender").text("");
    $("#getAll").prop('disabled', true);
}

function getAll(){
    var firstName = $("#inputFirstName").val();
    var lastName = $("#inputLastName").val();
    $("#name").text(firstName + " " + lastName);
    var city = $("#inputCity").val();
    var state = $("#inputState").val();
    var zip = $("#inputZip").val();
    $("#address").text(city+", "+state+" "+zip);
    $("#age").text($("#inputAge").val());
    if ($("#male").is(':checked')){
        $("#gender").text("Male");
    }
    else{
        $("#gender").text("Female");
    }
}