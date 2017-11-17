var Peepub   = require('pe-epub-fs')(require('pe-epub'));
var epubJson = require('/Users/galbers/GitHub/artistryinbronze/public/epub.json'); // see examples/example.json for the specs
var myPeepub = new Peepub(epubJson);

myPeepub.create('/Users/galbers/GitHub/artistryinbronze/static/downloads/artistryinbronze.epub')
  .then(function(filePath){
  console.log(filePath); // the same path to your epub file!
});


/*

STEP 1

Temporarily simplify the `layouts/_default/baseof.html` and `layouts/section-head/single.html` tempates to remove unneeded navigational/interface elements, including the abstract listings in `section-head`.

STEP 2

quire build

STEP 3

Find and replace in the files in the `public` directory as listed below

STEP 4

node [FILEPATH]/build-epub.js

*/