// QuireUI Class
//
// Provides basic functionality for the interface on each HTML page. Custom
// functions should be defined as methods within this class. The setup()
// function which runs whenever a new UI instance is created can house event
// listeners, run one-time functions that modify page content, etc.
//
import L from 'leaflet'
import _ from 'lodash/core'
import debounce from 'lodash.debounce'
import findIndex from 'lodash.findIndex'
import Map from './map.js'
import Search from './search.js'
import DeepZoom from './deepzoom.js'
import lightBox from './lightbox.js'

class QuireUI {
  constructor() {
    this.searchInstance = null
    this.setup()
  }

  setup() {
    // Objects of interest
    let $navbarMenu = $('#js-navbar-menu')
    let $menu = $('#js-menu')
    let $menuCloseButton = $('#js-menu-close')
    let $curtain = $('#js-curtain')
    let $sectionTriggers = $('.js-section-trigger')
    let $mapEl = $('#js-map')
    let $deepZoomEl = $('#js-deepzoom')
    let $figures = $('.q-figure__wrapper')
    let $tables = $('.js-figure-table')
    let $searchEl = $('#js-search')

    this.anchorScroll(window.location.hash)

    $figures.click((e) => {
      let figID = e.currentTarget.parentNode.id
      let figWrappers = document.querySelectorAll('.q-figure__wrapper')
      let target = findIndex(figWrappers, function(f) {
        return f.parentNode.id === figID
      })

      lightBox(target)
    })

    // Event Listeners
    window.onkeydown = (e) => { this.keyboardControls(e) }
    $navbarMenu.click(() => { this.menuToggle()})
    $curtain.click(() => { this.menuHide()})
    $menuCloseButton.click(() => { this.menuHide()})
    $sectionTriggers.click(e => this.menuSectionToggle(e))
    $menu.focusin(() => { this.menuShow() })
    $menu.focusout(() => { this.menuHide() })
    $('a').on('click', (e) => { this.footnoteScroll(e) })
    $tables.click(e => this.tableToggle(e))

    // Page-specific setup
    if ($mapEl.length) { new Map() }
    if ($deepZoomEl.length) { new DeepZoom() }
    if ($searchEl.length) { this.searchSetup() }
  }

  anchorScroll(href) {
    href = typeof (href) === 'string' ? href : $(this).attr('href')
    var fromTop = 60

    if (href.indexOf('#') === 0) {
      var $target = $(href)

      if ($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - fromTop })
        if (window.history && 'pushState' in window.history) {
          window.history.pushState({}, document.title, window.location.pathname + href)
          return false
        }
      }
    }
  }

  footnoteScroll(e) {
    // Helper function to wrap selectors that contain . or : characters
    function jq(myid) {
      return myid.replace(/(:|\.|\[|\]|,)/g, '\\$1')
    }

    // Get the base Page url
    let basePath = window.location.origin + window.location.pathname
    let href = e.target.href

    if (basePath === href.split('#')[0]) {
      e.preventDefault()
      let target = $(e.target).attr('href')
      let distance = $(jq(target)).offset().top
      $('html, body').animate({scrollTop: distance - 60}, 250)
    }
  }

  keyboardControls(e) {
    let $prev = $('#js-prev')
    let $next = $('#js-next')
    let $curtain = $('#js-curtain')

    if (this.lightBoxVisible()) { return false }
    switch (e.which) {
      case 27: // Escape key
        if ($curtain.hasClass('is-visible')) { this.menuHide() }
        break
      case 37: // Left Arrow
        if ($prev.length) { window.location.href = $prev.attr('href') }
        break
      case 39: // Right Arrow
        if ($next.length) { window.location.href = $next.attr('href') }
        break
    }
  }

  menuShow() {
    let $menu = $('#js-menu')
    let $curtain = $('#js-curtain')

    if (!$menu.hasClass('is-visible')) {
      $menu.addClass('is-visible')
      $curtain.addClass('is-visible')
    }
  }

  menuHide() {
    let $menu = $('#js-menu')
    let $curtain = $('#js-curtain')

    if ($menu.hasClass('is-visible')) {
      $menu.removeClass('is-visible')
      $curtain.removeClass('is-visible')
    }
  }

  menuSectionToggle(e) {
    let $target = $(e.target)
    let $sectionContents = $target.closest('.js-menu-section').find('.js-menu-section-inner')
    $sectionContents.toggle()
  }

  menuToggle() {
    let $menu = $('#js-menu')
    let $curtain = $('#js-curtain')

    if ($menu.hasClass('is-visible')) {
      $menu.removeClass('is-visible')
      $curtain.removeClass('is-visible')
    } else {
      $menu.addClass('is-visible')
      $curtain.addClass('is-visible')
    }
  }

  lightBoxSetup() {
    let $figures = $('.q-figure img')

    if ($figures.length > 0) {
      $figures.on('click', function(e) {
        let figs = document.querySelectorAll('.q-figure')
        let target = findIndex(figs, function(f) {
          return f.id === e.target.parentNode.id
        })
        lightBox(target)
      })
    }
  }

  lightBoxVisible() {
    let pswpElement = document.querySelectorAll(".pswp")[0]
    if (pswpElement.classList.contains('pswp--visible')) {
      return true
    } else {
      return false
    }
  }

  searchSetup() {
    this.searchInstance = new Search({
      el: "#js-search",
      delimiters: ['${', '}']
    })
  }

  tableToggle(e) {
    let $target = $(e.target)
    let $table = $target.closest('.js-figure-table')
    let $curtain = $table.prev('.js-figure-curtain')

    if ($table.hasClass('is-expanded')) {
      $table.removeClass('is-expanded')
      $curtain.removeClass('is-expanded')
    } else {
      $table.addClass('is-expanded')
      $curtain.addClass('is-expanded')
    }
  }

}

export default QuireUI
