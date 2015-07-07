define(["jquery"], function(jquery) {'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = function () {
        var listItem = $(".listItem");
        var intro = $("#intro");

        function ClickEvents() {
            $(intro).html("<strong>ClickEvents is loaded. Click the three items seen below.</strong>");
            //$(intro).addClass('blue');
            $(listItem).click(listClick);
        }

        var listClick = function (event) {
            var clickText = event.target.innerText;
            //var prompt = "You clicked: ";
            //$(intro).html(prompt + clickText);
            var urlstr = "/" + clickText;
            $.getJSON(urlstr, function (data) {
                if (clickText == "Item01")
                    $(result).html("<strong>Result:</strong>&nbsp;"+data.result);
                if (clickText == "Item02")
                    $(route).html("<strong>Route:</strong>&nbsp;"+data.route);
                if (clickText == "Item03")
                    $(message).html("<strong>Message:</strong>&nbsp;"+data.message);
            })
        };

        return ClickEvents;

    }();

    return elf.ClickEvents;

});
