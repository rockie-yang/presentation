// Generated on 2016-09-09 using generator-impress 0.1.2
'use strict';

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            livereload: {
                files: [
                    'index.html',
                    'js/*.js',
                    'css/*.css',
                    'steps/*.html',
                    'steps/list.json'
                ]
            }
        },
        connect: {
            options: {
                port: 8443,
                protocol: 'https',
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
                key: grunt.file.read('domain.key').toString(),
                cert: grunt.file.read('domain.crt').toString(),
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        }
    });

    grunt.registerTask('server', ['connect:livereload', 'open', 'watch']);
};
