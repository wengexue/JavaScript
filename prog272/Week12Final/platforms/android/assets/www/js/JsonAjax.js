/**
 * Created by charlie on 2/19/15.
 */


$(document).ready(function() {
    $("#getJson").click(function(){
        getJson(display);
    });

    $("#getAjax").click(function(){
        getAjax(display);
    });
});

function getJson(callback){
    var result = $.getJSON('Presidents.json', callback);
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
