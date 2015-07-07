define(['DisplayAddress', 'DisplayFileList', "DisplayPictureCaption", "DisplayDocumentData"], function(
    DisplayAddress, DisplayFileList, DisplayPictureCaption, DisplayDocumentData) {

    'use strict';

    // Define a Display factory constructor function
    function DisplayFactory() {}

    //By default we create DisplayFileLis
    DisplayFactory.prototype.product = DisplayFileList;


    // Create a Display with this function
    DisplayFactory.prototype.create = function(options) {

        switch (options.objectType) {
            case "fileList":
                this.product = DisplayFileList;
                break;
            case "address":
                this.product = DisplayAddress;
                break;
            case "pictureCaption":
                this.product = DisplayPictureCaption;
                break;
            case "documentData":
                this.product = DisplayDocumentData;
                break;
            default:
                this.product = DisplayFileList;
        }

        return new this.product(options);

    };

    return DisplayFactory;
});
