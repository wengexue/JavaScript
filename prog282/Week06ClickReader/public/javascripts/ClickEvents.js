define(function(require) {'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = ( function() {
            var listItem = $(".listItem");
            var intro = $("#intro");

            function ClickEvents() {
                $(intro).html("ClickEvents is loaded. Click items on this page.");
                $(intro).addClass('blue');
                $(listItem).click(listClick);                
            }

            var listClick = function(event) {
                var clickText = event.target.innerText;
                var prompt = "You clicked: ";
                $(intro).html(prompt + clickText);
				var severString = "/"+clickText;
                $.getJSON(severString, function(data) {
                	if (clickText == "Item01")
						$(result).html("result: "+data.result);
                	if (clickText == "Item02")
						$(route).html("route: "+data.route);
                	if (clickText == "Item03")
						$(message).html("message: "+data.message);
    			});
			};

            return ClickEvents;

        }());

    return elf.ClickEvents;

});
