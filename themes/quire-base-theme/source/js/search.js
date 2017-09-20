import lunr from 'lunr'

class Search {
  constructor() {
    this.index = this.buildIndex()
    this.dataURL = '/search.json'
    this.getData()
    this.contentList = []
  }

  buildIndex() {
    return lunr(function() {
      this.field('title', { boost: 10 })
      this.field('content')
      this.ref('id')
    })
  }

  getData() {
    $.get(this.dataURL, {cache: true}).done((data) => {
      this.contentList = data
      data.forEach((item) => {
        this.index.add(item)
      })
    })
  }

  // Return results in order of relevance
  search(query) {
    let results = this.index.search(query)
    return results.map((result) => {
      return this.contentList[result.ref]
    })
  }
}

export default Search
