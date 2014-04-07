/* global module: false */
module.exports = function(grunt) {

  //global config
  var globalConfig = {
    src: 'src',
    dest: 'build'
  };

  //load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var LIVERELOAD_PORT = 35729;
  var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
  var mountFolder = function( connect, dir ) {
    return connect.static(require('path').resolve(dir));
  };

  // Project configuration.
  grunt.initConfig({

    globalConfig: globalConfig,

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
            ' Licensed <%= pkg.license %> */\n',

    // clean destination folders
    clean: {
      build: ['<%= globalConfig.dest %>/']
    },

    // compile jade templates to HTML
    jade: {
      dev: {
        options: {
          client: false,
          pretty: true,
          data: {
            debug: false
          }
        },
        files:[{
          cwd: '<%= globalConfig.src %>/jade',
          src: '*.jade',
          dest: '<%= globalConfig.dest %>',
          expand: true,
          ext: '.html' 
        }]
      }
    },

    // validate JavaScript code
    jshint: {
      options:{
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['Gruntfile.js', '<%= globalConfig.src %>/js/*.js']
      }
    },

    // concatenate JavaScript files; done just for development
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      vendor_js: {
        src: [
          'bower_components/jquery/jquery.js'
        ],
        dest: '<%= globalConfig.dest %>/js/vendor.js'
      },
      main_js: {
        src: ['<%= globalConfig.src %>/js/*.js'],
        dest: '<%= globalConfig.dest %>/js/main.js'
      }
    },

    // copy image assets from source to build folder
    copy: {
      images: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/img',
          src: ['**'],
          dest: '<%= globalConfig.dest %>/img'
        }]
      }
    },

    // minify JavaScript files; done just for production
    uglify: {
      options: {
        banner: '<%= banner %>',
        preserveComments: 'some'
      },

      prod:{
        files:{
          '<%= globalConfig.dest %>/js/vendor.js': [
                                                    'bower_components/jquery/jquery.js'
                                                  ],
          '<%= globalConfig.dest %>/js/main.js': ['<%= globalConfig.src %>/js/*.js']
        }
      }
    },

    //remove unused CSS
    uncss: {
      dist: {
        files: {
          '<%= globalConfig.dest %>/css/tidy.css': ['<%= globalConfig.dest %>/index.html']
        }
      }
    },

    //minify CSS
    cssmin: {
      combine: {
        files: {
          '<%= globalConfig.dest %>/css/main.css': ['<%= globalConfig.dest %>/css/main.css']
        }
      }
    },

    // minify images; done just for production
    imagemin: {
      img: {
        files: [{
          expand: true,
          cwd: '<%= globalConfig.src %>/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= globalConfig.dest %>/img/'
        }]
      }
    },

    // watch for changes in files; done just for development
    watch: {
      options: {
        livereload: LIVERELOAD_PORT
      },
      js: {
        files: ['<%= jshint.all.src %>', '.jshintrc'],
        tasks: ['default', 'concat', 'less:dev']
      },
      less: {
        files: '<%= globalConfig.src %>/less/**/*.less',
        tasks: ['default', 'concat', 'less:dev']
      },
      jade: {
        files: '<%= globalConfig.src %>/jade/**/*.jade',
        tasks: ['default', 'concat', 'less:dev']
      },
      img:{
        files: '<%= globalConfig.src %>/img/**/*.{png,jpg,gif}',
        tasks: ['copy']
      }
    },

    // connect to localhost server; done just for development
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost'
      },
      dev: {
        options: {
          middleware: function( connect ) {
            return [
              lrSnippet, mountFolder(connect, 'build')
            ];
          }
        }
      }
    }

  });

  // register grunt tasks
  grunt.registerTask('default', ['clean', 'jade', 'jshint', 'copy']);
  grunt.registerTask('dev', ['default', 'concat', 'less:dev', 'connect', 'open', 'watch']);
  grunt.registerTask('prod', ['default', 'validation','less:prod', 'uglify', 'imagemin']);
};