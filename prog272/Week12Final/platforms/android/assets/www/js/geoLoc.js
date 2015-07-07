/**
 * Created by bcuser on 3/21/15.
 */
var app = {
    // Application Constructor
    initialize: function() {
        $('#title').html("Xue Geo");
        app.geolocation = false;
        $('#runGeo').click(elf.Utility.runGeo);
        if(navigator.geolocation) {
            app.geolocation = navigator.geolocation;
            elf.Utility.showMessage('adding geolocation from navigator');
        }
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        try {
            elf.Utility.showMessage("You are running jQuery version: " + $.fn.jquery);
            // elf.Utility.runGeo();
        } catch(e) {
            elf.Utility.showMessage("error: " + e);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();