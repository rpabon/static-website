var basePaths = {
  src: './src',
  dest: './build'
};

var config = {
  paths: {
    src: basePaths.src,
    dest: basePaths.dest,
    tasks: ['./gulp/**/*.js', './Gulpfile.js'],
    html: {
      src: basePaths.src + '/jade/*.jade',
      srcAll: basePaths.src + '/jade/**/*.jade',
      dest: basePaths.dest
    },
    scss: {
      src: basePaths.src + '/scss/**/*.scss',
      dest: basePaths.dest + '/css'
    },
    js: {
      src: basePaths.src + '/js/*.js',
      srcAll: basePaths.src + '/js/**/*.js',
      dest: basePaths.dest + '/js'
    },
    img: {
      src: basePaths.src + '/img/**/*.{png,jpg,gif}',
      dest: basePaths.dest + '/img'
    }
  }
};

module.exports = config;
