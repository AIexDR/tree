'use strict';

module.exports = function(grunt) {

    require('grunt-task-loader')(grunt);

    var cwd = 'src/';
    var node_modules = './node_modules/';

    grunt.initConfig({
        clean: {
            all: [
                './build',
				'./sonar'
            ]
        },
		copy: {
		  main: {
			cwd: cwd,
			expand: true,
			src: ['index.html', 'assets/**'],
			dest: 'build/',
		  },
		},
        concat: {
            app: {
                src: [
                    cwd + 'app/app.modules.js',
					cwd + 'app/components/tree/TreeModule.js',
					cwd + 'app/components/tree/TreeAsListModule.js',
                    cwd + 'app/components/tree/TreeControllers.js',
					cwd + 'app/components/tree/TreeServices.js',
					cwd + 'app/components/tree/TreeAsListControllers.js',
					cwd + 'app/components/tree/TreeAsListServices.js',
                    cwd + 'app/components/storage/StorageServices.js'
                ],
                dest: './build/app.js'
            }
        },
        jshint: {
            files: [
                'GruntFile.js',
                'src/app/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        karma: {
            run: {
                configFile: 'karma.conf.js',
                singleRun: true,
            }
        }


    });

    grunt.registerTask('dev', [
        'jshint', 'clean:all', 'copy', 'concat:app'
    ]);

    grunt.registerTask('default', ['dev']);

};
