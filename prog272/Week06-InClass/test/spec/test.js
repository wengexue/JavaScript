/* global describe, it */

(function () {
    'use strict';

    describe('All Week06-InClass Test', function () {
        describe('Video Test', function () {
            beforeEach(function (done) {
                $('#mainArea').load('./MainCode.html', function () {
                    $("#inputFirstName").val("Patricia");
                    //$("#firstName").trigger('click');
                    done();
                });
            });
            it('it should prove Patricia is first name input control', function () {
                var firstName = $("#inputFirstName").val();
                console.log(firstName);
                expect(firstName).to.equal("Patricia");
            });
        });
    });
})();
