module.exports = function(grunt) {

	// PROJECT CONFIG
	// 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		notify: {
			css: {
				options: {
					message: 'Stylesheets compiled and prefixed.',
				}
			},
			js: {
				options: {
					message: 'Scripts uglified, concatenated, and minified.',
				}
			},
		},
		clean: {
			css:  ['assets/css'],
			js:   ['assets/js/build'],
			dev:  ['assets/css','assets/js/build'],
		},
		uglify: {
			options: {
				// mangle: false,
				// compress: false,
				beautify: true,
				// sourceMap: true,
				// sourceMapIncludeSources: true
			},
			default: {
				files: [{
					expand: true,
					cwd: 'assets/js',
					src: '**/*.js',
					dest: 'assets/js/build'
				}]
			}
		},
		concat: {
			options: {
				separator: '',
			},
			dev: {
				src: [
					// 'assets/js/build/lib/*.js',
					'assets/js/build/pre/*.js',
					'assets/js/build/post/*.js',
					'assets/js/build/main.js',
				],
				dest: 'assets/js/build/main.js',
			},
		},
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'assets/scss',
					src: ['*.scss'],
					dest: 'assets/css',
					ext: '.css'
				}]
			}
		},
		autoprefixer: {
			options: {
				map: {
					prev  : 'assets/css',
					inline: false,
				},
			},
			default: {
				src:  'assets/css/*.css'
			},
		},
		watch: {
			js: {
				files: ['assets/js/**/*.js','!assets/js/build/**/*.js'],
				tasks: ['clean:js','newer:uglify','concat:dev','notify:js'],
			},
			css: {
				files: ['assets/scss/**/*.scss'],
				tasks: ['clean:css','newer:sass:dev','newer:autoprefixer','notify:css'],
				options: {
					interrupt: true,
				}
			},
			// dev: {
			// 	files: ['assets/js/**/*.js','!assets/js/build/**/*.js','assets/scss/**/*.scss'],
			// 	tasks: ['newer:clean','newer:sass:dev','newer:autoprefixer','newer:uglify','concat:dev'],
			// },
		},
		concurrent: {
			dev: ['watch:css','watch:js'],
			options: {
				logConcurrentOutput: true,
			}
		}
	});

	// LOAD PLUGINS
	// 
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.loadNpmTasks('grunt-contrib-connect'); //server@todo[not configured,working]
	grunt.loadNpmTasks('grunt-notify');

	// TASK SETUP
	// 
	grunt.registerTask('default', ['clean','uglify','concat','sass:dev','autoprefixer']);
	grunt.registerTask('css', ['clean:css','sass:dev','autoprefixer','notify:css']);
	grunt.registerTask('dev', ['concurrent']);
	// grunt.registerTask('test', ['watch:test']);
	// grunt.registerTask('cnc', ['']);
	// grunt.registerTask('push', ['ftpush']);

};