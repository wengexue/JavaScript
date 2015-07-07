/**
 * @file: ReaderFactory.js
 * @author Charlie Calvert
 */

define(['DefaultReader', 'JsonReader', "MarkdownReader"], function(
    DefaultReader, JsonReader, MarkdownReader) {
    'use strict';

    var ReaderFactory = (function() {

        function ReaderFactory() {}

        ReaderFactory.prototype.product = {};

        var showMarkdown = function() {

        };

        ReaderFactory.prototype.create = function(options) {

            switch (options.objectType) {
                case "JsonReader":
                    this.product = new JsonReader();
                    break;
                case "MarkdownReader":
                    this.product = new MarkdownReader();
                    break;
                case "DefaultReader":
                    this.product = new DefaultReader();
                    break;
                default:
                    this.product = {};
            }

            return this.product;

        };

        return ReaderFactory;

    }());

    return ReaderFactory;
});
