/**
 * Created by xuewenwen on 4/18/2015.
 */

var MyObject = (function() {

    function MyObject() {
        $('#getKipling').click(getKipling);
        $('#getNumbers').click(getNumbers);
        $('#clearList').click(clearList);
    }

    function getKipling(){
        var kipling = {
            Artist: "Rudyard Kipling",
            Poem: "If",
            FirstLine: "If you can keep your head when all about you are losing theirs and blaming it on you",
            Url: "http: //www.poetryfoundation.org/poem/175772"
        };
        for (var property in kipling) {
            if (kipling.hasOwnProperty(property)) {
                $("#myList").append('<li>' + kipling[property] + '</li>');
            }
        }
    }

    function getNumbers(){
        for (var i = 5; i <= 25; i++){
            $("#myList").append('<li>' + i*i + '</li>');
        }
    }

    function clearList(){
        $('#myList').empty();
    }

    return MyObject;
}());





$(document).ready(function(){
    var myObject = new MyObject();

})