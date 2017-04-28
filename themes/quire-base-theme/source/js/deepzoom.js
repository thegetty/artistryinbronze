import L from 'leaflet'
import 'leaflet-iiif'
import 'leaflet-fullscreen'

class DeepZoom {
  constructor() {
    this.map = {}
    this.el = 'js-deepzoom'
    this.ctr = [0, 0]
    this.zoom = 0
    this.endpoint = 'http://atlas.getty.edu/api/iiif/'
    this.objectID = $('#' + this.el).data('object-id')
    this.setup()
    this.addTiles()
  }

  setup() {
    this.map = L.map(this.el, {
      center: this.ctr,
      crs: L.CRS.Simple,
      zoom: this.zoom,
      fullscreenControl: true
    })
  }

  addTiles() {
    let url = `${this.endpoint}${this.objectID}/manifest.json`
    $.getJSON(url, (data) => {
      // Create a series of IIIF layers
      let iiifLayers = {}
      $.each(data.sequences[0].canvases, function(_, val) {
        iiifLayers[val.label] = L.tileLayer.iiif(val.images[0].resource.service['@id'] + '/info.json');
      });

      L.control.layers(iiifLayers).addTo(this.map);

      iiifLayers[Object.keys(iiifLayers)[0]].addTo(this.map);
    })
  }
}

export default DeepZoom
