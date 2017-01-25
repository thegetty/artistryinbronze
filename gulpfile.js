const gulp = require('gulp')
const exec = require('child_process').exec
const spawn = require('child_process').spawn
const path = require('path')

const THEME_PATH = path.join(__dirname, 'themes', 'quire-catalogue-theme')
const WEBPACK_BIN = './node_modules/.bin/webpack'

// Run webpack in the themes folder
gulp.task('theme', function(cb) {
  exec('./node_modules/.bin/webpack', { cwd: THEME_PATH }, function(err) {
    if (err) return cb(err)
    cb()
  })
})

// Run the Hugo build to see content changes
gulp.task('content', function(cb) {
  exec('hugo', function(err) {
    if (err) return cb(err)
    cb()
  })
})

// Run the Hugo build task with webpack as a prereq
gulp.task('build', ['theme'], function(cb) {
  exec('hugo', function(err) {
    if (err) return cb(err)
    cb()
  })
})

//
gulp.task('dev', function(cb) {
  spawn(WEBPACK_BIN, ['--watch'], { cwd: THEME_PATH, stdio: 'inherit' }, function(err) {
    if (err) return cb(err)
    cb()
  })

  spawn('hugo', ['server'], { stdio: 'inherit' }, function(err) {
    if (err) return cb(err)
    cb()
  })

  // This works but there is no output in the console
  // exec('hugo server', function(err, stdout, stderr) {
    // if (err) return cb(err)
    // console.log(stdout) // See Hugo output
    // console.log(stderr) // Debugging feedback
    // cb()
  // })
  // exec('./node_modules/.bin/webpack --watch', { cwd: THEME_PATH }, function(err, stdout, stderr) {
    // if (err) return cb(err)
    // console.log(stdout) // See Hugo output
    // console.log(stderr) // Debugging feedback
    // cb()
  // })
})

