/**
 * Created by bcuser on 2/12/15.
 */

$(document).ready(function(){
    $("#debug").html("It's loading");

    $("#inputFirstName").val("Patricia");

    $("#firstName").click(function(){
        var ft = $("#inputFirstName").val();
        $("#first").html(ft);
    });

    $("#getPresidents").click(function(){
        $.getJSON('Presidents.json', function(result){
            console.log(JSON.stringify(result, null,4));
            $("#displayJson").html("");
            var i;
            var content="";
            for (i=0; i<result.length; i++){
                content +="<li>"+ result[i].firstName+" "+result[i].lastName + "</li>";
            }
            $("#displayJson").append(content);
        });
    });
});
