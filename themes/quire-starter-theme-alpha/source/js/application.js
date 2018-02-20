// Application JS
//
// This file serves as the entry point for Weback, the JS library responsible
// for building all CSS and JS assets for the theme. It is advisable for this
// file to remain mostly empty; use it as a manifest to import various
// components that live in separate files.
//

// Dependencies
// -----------------------------------------------------------------------------
// Even though this is a JS file, an import statement for the application.scss
// file must remain here so that Sass files are compiled when the theme builds.

// Stylesheets
//
import 'leaflet/dist/leaflet.css'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import 'photoswipe/dist/photoswipe.css'
import '../css/application.scss'


// JS Libraries (add them to package.json with `npm install [library]`)
//
import $ from 'jquery'

// JS Modules (create these in the /source/js/ folder of this theme)
//
import QuireUI from './ui.js'


// Document Ready event
// -----------------------------------------------------------------------------
//
// If you want code to be run as soon on every page load as soon as things are
// ready, add it to the body of this function.
//

window.pageUI = {}

$(document).ready(function() {
  window.pageUI = new QuireUI()
})
