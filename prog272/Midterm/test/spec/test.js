/* global describe, it */

(function () {
    'use strict';

    describe('Integraption Tests', function () {
        describe('Basic click and get', function () {

            beforeEach(function (done) {
                $('#mainArea').load('./MainCode.html', function () {
                    initialize();
                    $("#insertMale").trigger('click');
                    done();
                });
            });



            it('expect age to equal 32', function() {
                var age = parseInt($("#age").html());
                expect(age).to.equal(32);
            });

            it('expect first and last inputs to equal Tesla', function() {
                var inputLastName = $("#inputLastName").val();
                expect(inputLastName).to.equal('Tesla');
                var inputFirstName = $("#inputFirstName").val();
                expect(inputFirstName).to.equal('Nikola');
            });

            it('expect name to equal Nikola Tesla', function() {
                var Name = $("#name").html();
                expect(Name).to.equal('Nikola Tesla');
            });

            it('expect address to equal Smiljan NY, 32211 ', function() {
                var Address = $("#address").html();
                expect(Address).to.equal('Smiljan, NY 32211');
            });

            it('expect male radio button to be checked', function() {
                $("#male").trigger("click");
                var Gender = $("#gender").html();
                console.log(Gender);
                expect(Gender).to.equal('Male');
            });

            it('expect female radio button to be checked', function() {
                $("#female").trigger("click");
                var Gender = $("#gender").html();
                console.log(Gender);
                expect(Gender).to.equal('Female');
            });

            it('expect lastName to equal Curie', function() {
                $("#insertFemale").trigger("click");
                var Name = $("#name").html();
                expect(Name).to.equal('Marie Curie');
                var inputLastName = $("#inputLastName").val();
                expect(inputLastName).to.equal('Curie');
            });

            it('expect Address to equal Passy', function() {
                $("#insertFemale").trigger("click");
                var Address = $("#address").html();
                expect(Address).to.equal('Passy, CA 21122');
            });

            it('expect clear to clear the fields', function() {
                $("#insertFemale").trigger("click");
                $("#clear").trigger('click');
                var inputLastName = $("#inputLastName").val();
                expect(inputLastName).to.equal('');
                var inputFirstName = $("#inputFirstName").val();
                expect(inputFirstName).to.equal('');
            });

        });


        describe('Integration test of $.getJSON', function () {
            beforeEach(function(done) {
                $('#mainArea').load('MainCode.html', function() {
                    initialize();
                    $("#getJson").trigger('click');
                    done();
                });
            });

            it("shows that George was loaded", function(done) {
                getJson(function(result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].firstName).to.equal('George');
                    var jsonDisplay = $('.list-group').html();
                    console.log(jsonDisplay);
                    expect(jsonDisplay.length).to.equal(188);
                    done();
                })
            });
        });

        describe('Integration test of $.ajax', function () {
            beforeEach(function(done) {
                $('#mainArea').load('MainCode.html', function() {
                    initialize();
                    $("#getAjax").trigger('click');
                    done();
                });
            });

            it("shows that Isaac Newton was loaded", function(done) {
                getAjax(function(result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].lastName).to.equal('Newton');
                    var jsonDisplay = $('.list-group').html();
                    expect(jsonDisplay.length).to.equal(183);
                    done();
                })
            });
        });







    });
})();
