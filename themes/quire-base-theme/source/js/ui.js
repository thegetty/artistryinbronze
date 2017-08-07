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
    let $searchButton = $('#js-search')
    let $searchCloseButton = $('#js-search-close')
    let $searchInput = $('#js-search-input')
    let $figures = $('.q-figure__wrapper, .q-figure__table-wrapper')

    this.anchorScroll(window.location.hash)

    $figures.click((e) => {
      let figID = e.currentTarget.parentNode.id
      let figWrappers = document.querySelectorAll('.q-figure__wrapper, .q-figure__table-wrapper')
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
    $searchButton.click(() => { this.searchToggle() })
    $searchCloseButton.click(() => { this.searchHide() })
    $menu.focusin(() => { this.menuShow() })
    $menu.focusout(() => { this.menuHide() })
    $('a').on('click', (e) => { this.footnoteScroll(e) })

    // Page-specific setup
    if ($mapEl.length) { new Map() }
    if ($deepZoomEl.length) { new DeepZoom() }

    // Search-specific code
    let debouncedSearch = debounce(this.searchQuery, 50)
    let boundDebounce = debouncedSearch.bind(this)
    $searchInput.keypress(() => {
      boundDebounce()
      // Force repaint for webkit
      $('<style></style>').appendTo($(document.body)).remove()
    })
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
    let $searchResults = $('#js-search-results')

    if (this.lightBoxVisible()) { return false }
    switch (e.which) {
      case 27: // Escape key
        if ($searchResults.hasClass('is-visible')) { this.searchToggle() }
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

  searchToggle() {
    let $searchResults = $('#js-search-results')
    let $navbar = $('#js-navbar')
    let $body = $('body')

    if ($searchResults.hasClass('is-visible')) {
      $searchResults.removeClass('is-visible')
      $navbar.removeClass('js-search-active')
      $body.removeClass('no-scroll')
    } else {
      $searchResults.addClass('is-visible')
      $navbar.addClass('js-search-active')
      $body.addClass('no-scroll')
    }
  }

  searchHide() {
    let $searchResults = $('#js-search-results')
    let $navbar = $('#js-navbar')
    let $body = $('body')

    if ($searchResults.hasClass('is-visible')) {
      $searchResults.removeClass('is-visible')
      $navbar.removeClass('js-search-active')
      $body.removeClass('no-scroll')
    }
  }

  searchQuery() {
    this.searchInstance = this.searchInstance || new Search()
    let $searchInput = $('#js-search-input')
    let query = $searchInput.val()
    let results = this.searchInstance.search(query)

    this.displaySearchResults(results)
  }

  displaySearchResults(results) {
    // Using basic DOM api instead of jquery in this method

    let container = document.getElementById('js-search-results-list')
    let template = document.getElementById('js-search-results-template')

    container.innerHTML = ''
    results.forEach((result) => {
      let clone = document.importNode(template.content, true)
      let item = clone.querySelector('.js-search-results-item-title')
      item.textContent = result.title
      item.href = result.url
      container.appendChild(clone)
    })
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
}

export default QuireUI
