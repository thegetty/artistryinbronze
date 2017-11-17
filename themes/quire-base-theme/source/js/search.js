import Vue from 'vue'
import lunr from 'lunr'
import debounce from 'lodash.debounce'

// When Quire supports different environments ("dev" vs "production"), this will switch to the proper URL automatically
const BASEURL =  process.env['NODE_ENV'] === 'production' ? 'http://www.getty.edu/publications/artistryinbronze' : ''

let Search = Vue.extend({
  name: 'Search',
  template: '#search-results-template',
  data () {
    return {
      contents: [],
      dataURL: BASEURL.concat('/search.json'),
      index: '',
      query: '',
      ready: false,
      results: [],
    }
  },
  mounted () {
    this.index = this.buildIndex()
    this.getData()
  },
  watch: {
    query (newQuery) {
      this.results = []
      this.results = this.search(newQuery)
    }
  },
  methods: {
    buildIndex() {
      return lunr(function() {
        this.field('title', { boost: 10 })
        this.field('content')
        this.ref('id')
      })
    },
    getData () {
      $.get(this.dataURL, {cache: true}).done((data) => {
        this.contents = data
        data.forEach((item) => {
          item.url = BASEURL.concat(item.url)
          this.index.add(item)
        })
        this.ready = true
      })
    },
    search (query) {
      let results = this.index.search(query)
      return results.map((result) => {
        return this.contents[result.ref]
      })
    },
    update: debounce(function (e) {
      this.query = e.target.value
    }, 300)
  }
})

export default Search
