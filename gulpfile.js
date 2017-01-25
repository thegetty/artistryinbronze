const chalk = require('chalk')
const exec = require('child_process').exec
const exists = require('command-exists')
const fs = require('fs')
const gulp = require('gulp')
const path = require('path')
const spawn = require('child_process').spawn
const spawnSync = require('child_process').spawnSync
const yaml = require('js-yaml')

const THEME_NAME = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8')).theme
const THEME_PATH = path.join(__dirname, 'themes', THEME_NAME)
const WEBPACK_BIN = './node_modules/.bin/webpack'

// Tasks ///////////////////////////////////////////////////////////////////////
//
// Setup (run on first install only)
gulp.task('setup', ['check dependencies', 'install theme'])

// Ensure that Hugo is installed
gulp.task('check dependencies', (cb) => {
  exists('hugo', (err, commandExists) => {
    if (commandExists) {
      console.log(chalk.green('Hugo is ready'))
    } else {
      return console.log(
        chalk.yellow('Please install Hugo before proceeding \n') +
          'Run `brew install hugo` if using homebrew \n' +
          'Or visit ' + chalk.underline('http://gohugo.io/') +
          ' for installation instructions.'
      )
    }
    cb(err)
  })
})

// Install the theme
gulp.task('install theme', ['check dependencies'], () => {
  if (fs.existsSync(THEME_PATH)) {
    console.log(chalk.green('Theme is installed'))
    console.log('Type `npm run preview` to view local changes.')
  } else {
    downloadTheme(THEME_NAME)
    installDependencies(THEME_PATH)
    console.log(chalk.green('Theme successfully installed'))
  }
})

// Run webpack in the themes folder
gulp.task('theme', (cb) => {
  console.log('Rebuilding theme files..')
  exec('./node_modules/.bin/webpack', { cwd: THEME_PATH }, (err) => {
    if (err) return cb(err)
    cb()
    console.log(chalk.green('Theme built successfully'))
  })
})

// Run the Hugo build to see content changes
gulp.task('content', (cb) => {
  exec('hugo', (err) => {
    if (err) return cb(err)
    cb()
  })
})

// Run the Hugo build task with webpack as a prereq
gulp.task('build', ['theme'], (cb) => {
  console.log('Rebuilding content files...')
  exec('hugo', (err) => {
    if (err) return cb(err)
    cb()
    console.log(chalk.green('Content files built succesfully.'))
    console.log(chalk.bold.green('Site built in public/'))
  })
})

// Run hugo server and webpack --watch simultaneously, with merged output
gulp.task('dev', (cb) => {
  spawn(WEBPACK_BIN, ['--watch'], { cwd: THEME_PATH, stdio: 'inherit' }, (err) => {
    if (err) return cb(err)
    cb()
  })

  spawn('hugo', ['server'], { stdio: 'inherit' }, (err) => {
    if (err) return cb(err)
    cb()
  })
})

// Helper Functions ////////////////////////////////////////////////////////////
//
function downloadTheme(themeName) {
  let themeUrl = `https://github.com/gettypubs/${themeName}`
  spawnSync('git', ['clone', themeUrl], {
    cwd: path.join(__dirname, 'themes'),
    stdio: 'inherit'
  },
    function(err) { if (err) return console.log(err) }
  )
}

function installDependencies(dir) {
  spawnSync('npm', ['install'], { cwd: dir, stdio: 'inherit' },
    function(err) { if (err) return console.log(err) }
  )
}

