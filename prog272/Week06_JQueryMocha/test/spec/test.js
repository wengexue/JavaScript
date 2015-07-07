/* global describe, it */

(function () {
    'use strict';

    describe('jQuery Integration Test', function () {

        describe('Basic click and get', function () {
            beforeEach(function (done) {
                $('#mainArea').load('./MainCode.html', function() {
                    $("#insertMale").trigger('click');
                    $("#getName").trigger("click");
                    $("#getAge").trigger("click");
                    $("#getAddress").trigger("click");
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

            it('expect first name to equal Nikola', function() {
                var firstName = $("#firstName").html();
                expect(firstName).to.equal('Nikola');
            });

            it('expect last name to equal Tesla', function() {
                var lastName = $("#lastName").html();
                expect(lastName).to.equal('Tesla');
            });


            it('expect City State Zip to equal Smiljan NY, 32211 ', function() {
                var city = $("#city").html();
                expect(city).to.equal('Smiljan');
                var state = $("#state").html();
                expect(state).to.equal('NY');
                var zip = $("#zip").html();
                expect(zip).to.equal('32211');
            });

            it('expect radio button 02 to be checked', function() {
                var radioText = $("#radioResult").html();
                expect(radioText).to.equal('clicked: male')
            });

            it('expect radio button 01 to be checked', function() {
                $("#female").trigger("click");
                var radioText = $("#radioResult").html();
                expect(radioText).to.equal('clicked: female');
            });

            it('expect lastName to equal Curie', function() {
                $("#insertFemale").trigger("click");
                $("#getName").trigger("click");
                var firstName = $("#firstName").html();
                expect(firstName).to.equal('Marie');
                var lastName = $("#lastName").html();
                expect(lastName).to.equal('Curie');
                var inputLastName = $("#inputLastName").val();
                expect(inputLastName).to.equal('Curie');
            });

            it('expect city to equal Passy', function() {
                $("#insertFemale").trigger("click");
                $("#getAddress").trigger("click");
                var city = $("#city").html();
                expect(city).to.equal('Passy');
                var state = $("#state").html();
                expect(state).to.equal('CA');
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
                    $("#getJson").trigger('click');
                    done();
                });
            });
/*
            it("shows that George was loaded", function(done) {
                $.getJSON('Presidents.json',function(result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].firstName).to.equal('George');
                    var jsonDisplay = $('#jsonDisplay').html();
                    expect(jsonDisplay.length).to.equal(92);
                    done();
                })
            });
*/
            it("shows that George was loaded", function(done) {
                getJson(function(result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].firstName).to.equal('George');
                    var jsonDisplay = $('#jsonDisplay').html();
                    expect(jsonDisplay.length).to.equal(92);
                    done();
                })
            });
        });

        describe('Integration test of $.ajax', function () {
            beforeEach(function(done) {
                $('#mainArea').load('MainCode.html', function() {
                    $("#getAjax").trigger('click');
                    done();
                });
            });

            /*
            it("shows that Isaac Newton was loaded", function(done) {
                $.ajax({
                    type: 'GET',
                    url: 'Scientists.json',
                    dataType: 'json',
                    success: function(result) {
                        expect(result.length).to.equal(4);
                        expect(result[0].lastName).to.equal('Newton');
                        var jsonDisplay = $('#jsonDisplay').html();
                        expect(jsonDisplay.length).to.equal(87);
                        done();
                    }
                })
            });*/
            it("shows that Isaac Newton was loaded", function(done) {
                getAjax(function(result) {
                    expect(result.length).to.equal(4);
                    expect(result[0].lastName).to.equal('Newton');
                    var jsonDisplay = $('#jsonDisplay').html();
                    expect(jsonDisplay.length).to.equal(87);
                    done();
                })
            });
        });

    });
})();