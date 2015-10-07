module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			templates: {
				files: ['willy/**.jade','willy/**/*.jade'],
				tasks: ['jade:build','copy:build']
			},
			styles: {
				files: ['willy/assets/css/**/*.less','willy/assets/**/**/*.less'],
				tasks: ['less:build','copy:build']
			}
		},
		jade: {
			build: {
				files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'willy/',      // Src matches are relative to this path.
						src: ['*.jade'], // Actual pattern(s) to match.
						dest: 'willy/',   // Destination path prefix.
						ext: '.hbs',   // Dest filepaths will have this extension.
						extDot: 'first' 			
					},
					{
						expand: true,
						cwd: 'willy/partials',
						src: ['*.jade'],
						dest: 'willy/partials',
						ext: '.hbs',
						extDot: 'first'
					}
				],
				options: {
					pretty: true
				}
			}
		},
		less: {
			build: {
				files: {
					"willy/assets/css/screen.css":"willy/assets/css/less/screen.less"
				},
				options: {
					paths: ['willy/assets/components/bootstrap/less','willy/assets/components/bootstrap/less/mixins','willy/assets/css/less'],
				}
			}
		},
		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'willy/',
						src: ['./!(*.jade|*.less)','./**/!(*.jade|*.less)','./**/**/!(*.jade|*.less)'],
						dest: 'ghost-0.7.1/content/themes/willy'
					}
				],
				options: {
					timestamp: true
				}
			}
		}
	});


  // Load the plugins that provide tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
	grunt.registerTask('default', ['less:build','jade:build','copy:build','watch']);

};