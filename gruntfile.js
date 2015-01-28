module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  watch: {
    react: {
      files: 'react/**/**/*.js',
                        tasks: ['browserify']
                        }
                        },

                        browserify: {
                        options: {
                        transform: [ require('grunt-react').browserify ]
                        },
                        client: {
                        src: ['react/**/**/*.js'],
                                         dest: 'public/js/bundle.js'
                                         }
                                         }
                                         });

                                         grunt.loadNpmTasks('grunt-browserify');
                                         grunt.loadNpmTasks('grunt-contrib-watch');

                                         grunt.registerTask('default', [
                                         'browserify'
                                         ]);
                                         };
