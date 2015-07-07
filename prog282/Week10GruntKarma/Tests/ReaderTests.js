/**
 * @author Charlie Calvert
 */

define(["ReaderFactory", "JsonReader", "MarkdownReader", "DefaultReader", "Control"],
    function(ReaderFactory, JsonReader, MarkdownReader, DefaultReader, Control) {
        'use strict';

        describe("Reader Tests", function() {

            it("proves we can run a test", function() {
                expect(true).toBe(true);
            });

            it("proves we can create a ReaderFactory, JasonReader and MarkdownReader", function() {
                expect(ReaderFactory).toBeTruthy();
                expect(JsonReader).toBeTruthy();
                expect(MarkdownReader).toBeTruthy();
            });

            it("proves we can create a JsonReader with our ReaderFactory", function() {
                var readerFactory = new ReaderFactory();
                var jsonReader = readerFactory.create({
                    objectType: "JsonReader"
                });
                expect(jsonReader).toBeTruthy();
                expect(jsonReader instanceof JsonReader).toBe(true);
            });

            it("proves we can create a MarkdownReader with our ReaderFactory", function() {
                var readerFactory = new ReaderFactory();
                var markdownReader = readerFactory.create({
                    objectType: "MarkdownReader"
                });
                expect(markdownReader).toBeTruthy();
                expect(markdownReader instanceof MarkdownReader).toBe(true);
            });

            it("proves we can create a DefaultReader with our ReaderFactory", function() {
                var readerFactory = new ReaderFactory();
                var defaultReader = readerFactory.create({
                    objectType: "DefaultReader"
                });
                expect(defaultReader).toBeTruthy();
                expect(defaultReader instanceof DefaultReader).toBe(true);
            });

            it("proves we can create a JsonReader and read something", function(done) {
                var jsonReader = new JsonReader();
                jsonReader.readFile("Data/FileList.json", function(dataFromServer) {
                    expect(dataFromServer.content["President01.json"]).toBe("Data/Presidents01.json");
                    done();
                });
            });

            it("proves we can create a JsonReader and read Presidents01.json", function(done) {
                var jsonReader = new JsonReader();
                jsonReader.readFile("Data/Presidents01.json", function(dataFromServer) {
                    expect(dataFromServer.content.firstName).toBe("George");
                    done();
                });
            });


        });
    });
