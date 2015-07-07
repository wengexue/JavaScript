define(['DisplayFactory', 'DisplayAddress', 'DisplayFileList', "DisplayPictureCaption", "DisplayDocumentData"], function(
    DisplayFactory, DisplayAddress, DisplayFileList, DisplayPictureCaption, DisplayDocumentData) {
    'use strict';

    describe("Display Tests", function() {

        it("proves we can run a test", function() {
            expect(true).toBe(true);
        });

        it("proves we can create a DisplayFactory, DisplayAddress, DisplayFileList, DisplayPictureCaption and DisplayDocumentData", function() {
            expect(DisplayFactory).toBeTruthy();
            expect(DisplayAddress).toBeTruthy();
            expect(DisplayFileList).toBeTruthy();
            expect(DisplayPictureCaption).toBeTruthy();
            expect(DisplayDocumentData).toBeTruthy();
        });

        it("proves we can create a DisplayAddress with our DisplayFactory", function() {
            var displayFactory = new DisplayFactory();
            var displayAddress = displayFactory.create({
                objectType: "address"
            });
            expect(DisplayAddress).toBeTruthy();
            expect(displayAddress instanceof DisplayAddress).toBe(true);
        });

        it("proves we can create a DisplayFileList with our DisplayFactory", function() {
            var displayFactory = new DisplayFactory();
            var displayFileList = displayFactory.create({
                objectType: "fileList"
            });
            expect(DisplayFileList).toBeTruthy();
            expect(displayFileList instanceof DisplayFileList).toBe(true);
        });

        it("proves we can create a DisplayPictureCaption with our DisplayFactory", function() {
            var displayFactory = new DisplayFactory();
            var displayPictureCaption = displayFactory.create({
                objectType: "pictureCaption"
            });
            expect(DisplayPictureCaption).toBeTruthy();
            expect(displayPictureCaption instanceof DisplayPictureCaption).toBe(true);
        });

        it("proves we can create a DisplayDocumentData with our DisplayFactory", function() {
            var displayFactory = new DisplayFactory();
            var displayDocumentData = displayFactory.create({
                objectType: "documentData"
            });
            expect(DisplayDocumentData).toBeTruthy();
            expect(displayDocumentData instanceof DisplayDocumentData).toBe(true);
        });

    });
});
