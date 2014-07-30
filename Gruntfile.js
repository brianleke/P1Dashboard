module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/*',
                dest: 'build/*'
            }
        },
        jasmine: {
            components: {
                src: [
                    'components/*js'
                ],
                options: {
                    specs: 'tests/spec/*Spec.js',
                    keepRunner: true
                    //helpers: 'test/spec/*.js'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('travis', ['jshint','jasmine']);

};
