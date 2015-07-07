define([ 'jquery', "Factory"], function(jq) {

    var Control = (function() {

        var factory;
        
        function Control(initFactory) {
            $("#buttonSayHello").click(getHello);           
            $("#buttomDirName").click(dirName);
            $("#buttonGetNine").click(getNine);
            $("#buttonAdd").click(getAdd);
            $("#buttonMultiply").click(getMultiply);
            $("#buttonFeetToMiles").click(getFeetToMiles);
            $("#buttonHoursToSeconds").click(getHoursToSeconds);
            $("#buttonFahrenheitToCelsius").click(getFahrenheitToCelsius);
            $("#buttonPosition").click(getPosition);
            
            factory = initFactory;
        }


        function getPosition() {
            var pos = factory.create({productType: 'Position'});
            pos.getPosition();
		}

        function getFeetToMiles() {
            var getFeetToMiles = factory.create({productType: 'FeetToMiles'});
            getFeetToMiles.getFeetToMilesResult();
        }

        function getHoursToSeconds() {
            var getHoursToSeconds = factory.create({productType: 'HoursToSeconds'});
            getHoursToSeconds.getHoursToSecondsResult();
        }

        function getFahrenheitToCelsius() {
            var getFahrenheitToCelsius = factory.create({productType: 'FahrenheitToCelsius'});
            getFahrenheitToCelsius.getFahrenheitToCelsiusResult();
        }

        function getMultiply() {
            var getMultiply = factory.create({productType: 'Multiply'});
            getMultiply.getMultiplyResult();
        }


        function getAdd() {
            var getAdd = factory.create({productType: 'Add'});
            getAdd.getAddResult();
        }


        function getNine() {
            var getNine = factory.create({productType: 'GetNine'});
            getNine.getNineResult();
        }

        function dirName() {
            var dirName = factory.create({productType: 'DirName'});
            dirName.getDirName();
        }
        
        function getHello() {
            var hello = factory.create({productType: 'Hello'});
            hello.getHello();
        }

        return Control;

    }());

    return Control;
});