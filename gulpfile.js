// Declaration
var gulp = require('gulp');
var robots = require('gulp-robots');
var humans = require('gulp-humans');
var googleWebFonts = require('gulp-google-webfonts');

/* Download Google fonts to local app.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
var options = {
  fontsDir: '../fonts/',
	cssDir: './',
	cssFilename: 'fonts.css'
};
gulp.task('google_fonts', function () {
  return gulp.src('./fonts.list')
  	.pipe(googleWebFonts(options))
  	.pipe(gulp.dest('dist/css/'));
});

/* Generate robots.txt file.
   Source: https://www.npmjs.com/package/gulp-robots */
gulp.task('robots_file', function () {
  gulp.src('dist/index.html')
    .pipe(robots({
      useragent: '*',
      // allow: ['folder1/', 'folder2/'],
      disallow: ['cgi-bin/']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('humans_file', function () {
  gulp.src('./dist/index.html')
    .pipe(humans({
      thanks: [
        'Node (@nodejs on Twitter)',
        'Gulp (@gulpjs on Twitter)'
      ],
      site: [
        'Standards: HTML5, CSS3',
        'Components: jQuery, Bootstrap, Fontawesome',
        'Software: Visual Studio Code'
      ],
      note: 'Built with love by Tej Kahlon.'
    }))
    .pipe(gulp.dest('./dist/'));
});

// Default
gulp.task('default', [ 'robots_file', 'humans_file', 'google_fonts']);
