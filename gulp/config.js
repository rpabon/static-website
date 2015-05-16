var basePaths, config;

basePaths = {
  src: './src',
  dest: './build'
};

config = {
  paths: {
    src: basePaths.src,
    dest: basePaths.dest,
    html: {
      src: basePaths.src + "/jade/*.jade",
      dest: basePaths.dest
    },
    less: {
      src: basePaths.src + "/less/*.less",
      srcMain: basePaths.src + "/less/main.less",
      dest: basePaths.dest + "/css"
    },
    js: {
      src: basePaths.src + "/js/*.js",
      dest: basePaths.dest + "/js"
    },
    img: {
      src: basePaths.src + "/img/*.{png,jpg,gif}",
      dest: basePaths.dest + "/img"
    }
  }
};

module.exports = config;
