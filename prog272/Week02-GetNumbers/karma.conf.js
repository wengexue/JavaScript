/* global process: true */

module.exports = function(config) {
	'use strict';
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath : '',

		frameworks : [ 'jasmine' ],

		// list of files / patterns to load in the browser
		filesX : [
			{pattern: 'Source/*.js', included: false},
			{pattern: 'Test/*.js', included: false}
		],

		files : [
			'Source/*.js',
			'Test/*.js'
		],

		// list of files to exclude
		exclude : [ 'Source/Main.js' ],

		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters : [ 'spec' ],

		// web server port
		port : 9876,

		// enable / disable colors in the output (reporters and logs)
		colors : true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel : config.LOG_INFO,

		// enable / disable watching file when any file changes
		autoWatch : true,

		// Start these browsers:
		// Chrome, PhantomJS
		browsers : [ 'PhantomJS' ],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout : 60000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun : false/* ,

		plugins : [ "karma-jasmine", "karma-requirejs",
					"karma-chrome-launcher", "karma-spec-reporter",
					'karma-phantomjs-launcher' ] */

	});
};
