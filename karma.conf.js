'use strict';

module.exports = function(config) {
    var node_modules = './node_modules/';
    var cwd = './src/';
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            node_modules + 'angular/angular.min.js',
            node_modules + 'angular-mocks/angular-mocks.js',
            node_modules + 'hammerjs/hammer.min.js',
            node_modules + 'angular-hammer/angular.hammer.min.js',
            node_modules + 'angular-sanitize/angular-sanitize.min.js',
            node_modules + 'angular-animate/angular-animate.min.js',
            node_modules + 'angular-aria/angular-aria.min.js',
            node_modules + 'angular-messages/angular-messages.min.js',
            node_modules + 'angular-cookies/angular-cookies.min.js',
            node_modules + 'angular-resizable/angular-resizable.min.js',
            node_modules + 'angular-uuid/angular-uuid.js',
            node_modules + 'angular-ui-router/release/angular-ui-router.min.js',
            node_modules + 'angular-translate/dist/angular-translate.min.js',
            node_modules + 'angular-translate-once/src/translate-once.js',
            node_modules + 'angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            node_modules + 'angular-dynamic-locale/tmhDynamicLocale.min.js',
            node_modules + 'ng-dialog/js/ngDialog.min.js',
            node_modules + 'clipboard/dist/clipboard.min.js',
            node_modules + 'moment/min/moment.min.js',
            node_modules + 'moment-duration-format/lib/moment-duration-format.js',
            node_modules + 're-tree/re-tree.min.js',
            node_modules + 'ng-device-detector/ng-device-detector.min.js',
            node_modules + 'angularjs-scroll-glue/src/scrollglue.js',
			cwd + 'app/app.modules.js',
			cwd + 'app/components/tree/TreeModule.js',
			cwd + 'app/components/tree/TreeAsListModule.js',
			cwd + 'app/components/tree/TreeControllers.js',
			cwd + 'app/components/tree/TreeServices.js',
			cwd + 'app/components/tree/TreeAsListControllers.js',
			cwd + 'app/components/tree/TreeAsListServices.js',
			cwd + 'app/components/storage/StorageServices.js',
			'test/**/*.js'
        ],
        logLevel: config.INFO,
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        singleRun: true,
        autoWatch: false,

        reporters: ['progress', 'junit', 'coverage'],

        preprocessors: {
            './src/app/**/*.js': ['coverage']
        },

        coverageReporter: {
            dir: 'sonar/coverage/',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'lcovonly', subdir: '.', file: 'report-lcov.txt' }
            ]
        },

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputDir: 'sonar/tests',
            outputFile: undefined,
            suite: 'unit'
        }
    });
};
