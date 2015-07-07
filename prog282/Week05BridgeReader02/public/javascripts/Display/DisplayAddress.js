/**
 * New node file
 */

define(function(require) {
	'use strict';

	var DisplayAddress = (function() {

		function DisplayAddress() {

		}

		DisplayAddress.prototype.display = function(fileList) {
			for ( var file in fileList) {
				var dataContent = fileList[file];
				dataContent = '<li>' +file+':      '+ dataContent + '</li>';
				$('#displayList').append(dataContent);
			};
		};

		return DisplayAddress;
	}());

	return DisplayAddress;

});