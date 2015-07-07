/**
 * Created by bcuser on 2/12/15.
 */

$(document).ready(function(){
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
    });

    $("#female").click(function(){
        $("#radioResult").text("clicked: female");
    });

    $("#getName").click(function(){
        var firstName = $("#inputFirstName").val();
        var lastName = $("#inputLastName").val();
        $("#firstName").text(firstName);
        $("#lastName").text(lastName);
    });

    $("#getAddress").click(function(){
        var city = $("#inputCity").val();
        var state = $("#inputState").val();
        var zip = $("#inputZip").val();
        $("#city").text(city);
        $("#state").text(state);
        $("#zip").text(zip);
    });

    $("#getAge").click(function(){
        $("#age").text($("#inputAge").val());
    });


    $("#getJson").click(function(){
        //getJson();
        getJson(display);
    });

    $("#getAjax").click(function(){
        //getAjax();
        getAjax(display);
    });

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
    $("#radioResult").text("clicked: male");
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
    $("#radioResult").text("clicked: female");
}

function clear(){
    $("#inputFirstName").val("");
    $("#inputLastName").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputZip").val("");
    $("#male").prop("checked", false);
    $("#female").prop("checked", false);
    $("#radioResult").text("");
    $("#firstName").text("");
    $("#lastName").text("");
    $("#city").text("");
    $("#state").text("");
    $("#zip").text("");
    $("#age").text("");
}

/*
function getJson(){
    $.getJSON('Presidents.json', function(result){
        console.log(JSON.stringify(result, null,4));
        $("#jsonDisplay").html("");
        var i;
        var content="";
        for (i=0; i<result.length; i++){
            content +="<li>"+ result[i].firstName+" "+result[i].lastName + "</li>";
        }
        $("#jsonDisplay").append(content);
    });
}
*/

function getJson(callback){
    var result = $.getJSON('./Presidents.json', callback);
    result.fail(errorHandler);
}

function errorHandler(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
}

function display(result) {
    console.log(result);
    $("#jsonDisplay").empty();
    $.each(result, function(index, bar) {
        $("#jsonDisplay").append(
            '<li>' +
            bar.firstName + ' ' +
            bar.lastName + '</li>');
    });
}

/*
function getAjax(){
    $.ajax({
        type: 'GET',
        url: 'Scientists.json',
        dataType: 'json',
        success: function(data) {
            $("#jsonDisplay").html("");
            var i;
            var content="";
            for (i=0; i<data.length; i++){
                content +="<li>"+ data[i].firstName+" "+data[i].lastName + "</li>";
            }
            $("#jsonDisplay").append(content);
        },
        error: function() {
            alert('Error.....');
        }
    });
}
*/


function getAjax(callback){
    $.ajax({
        type: 'GET',
        url: 'Scientists.json',
        dataType: 'json',
        success: callback,
        error: errorHandler
    });
}