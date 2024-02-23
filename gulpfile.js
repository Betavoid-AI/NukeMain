const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

function build() {
    return gulp.src('**/*.ejs', { cwd: 'F:/7. Betavoid Product - NUKE/0. Nuke App/NukeMain' }) // Adjust the path to your root directory
      .pipe(ejs())
      .pipe(rename({ extname: '.html' }))
      .pipe(gulp.dest('./output')); // Change the output directory to './output'
  }

exports.default = build;
