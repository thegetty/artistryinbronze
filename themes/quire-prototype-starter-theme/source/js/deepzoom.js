/* eslint-disable no-multi-spaces  */

import L from 'leaflet'

class Map {
  constructor() {
    this.map = {}
    this.el = 'js-map'
    this.defaultZoom = 6
    this.maxZoom = 12
    this.minZoom = 5
    this.ctr = this.readCoordinates()
    this.tiles = 'https://api.mapbox.com/v4/isawnyu.map-knmctlkh/{z}/{x}/{y}.png?access_token='
    this.token = 'pk.eyJ1IjoiZWdhcmRuZXIiLCJhIjoiN2IyMmRlMTc0YTAwMzRjYWVhMzI5ZGY1YmViMGVkZTEifQ._576KIFjJ0S_dRHcdM2BmQ'
    this.attr = `Tiles © <a href="http://mapbox.com/" target="_blank" tabindex="-1">MapBox</a>
                 | Tiles and Data © 2013 <a href="http://www.awmc.unc.edu" target="_blank" tabindex="-1">AWMC</a>
                 <a href="http://creativecommons.org/licenses/by-nc/3.0/deed.en_US" target="_blank" tabindex="-1">CC-BY-NC 3.0</a>`
    this.geojsonPath = $('#' + this.el).data('geojson')
    this.setup()
    this.addTiles()

    if (this.geojsonPath) { this.addData() }

    // Handle location hash, if any
    if (window.location.hash.slice(1, 4) === 'loc') { this.zoomToHash() }
  }

  readCoordinates () {
    return [$('#' + this.el).data('lat'), $('#' + this.el).data('long')]
  }

  setup() {
    this.map = L.map(this.el, {
      // options
      maxZoom: this.maxZoom,
      minZoom: this.minZoom
    }).setView(this.ctr, this.defaultZoom)

  }

  addTiles() {
    L.tileLayer(this.tiles + this.token, {
      // options
      attribution: this.attr
    }).addTo(this.map)
  }

  addData() {
    // get the JSON
    $.getJSON(`/${this.geojsonPath}.json`, (json) => {
      // Add it to the map
      L.geoJson(json, {
        // Break these out into separate functions if necessary
        pointToLayer: (feature, latlng) => {
          return L.circleMarker(latlng, {
            radius: 8,
            fillColor: '#333',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.75
          })
        },
        onEachFeature: (feature, layer) => {
          let options = {minWidth: 100, maxHeight: 250 }
          layer.bindPopup(feature.properties.description, options)
        }
      }).addTo(this.map)
    })
  }

}

export default Map
