This is the repository for *Artistry in Bronze: The Greeks and Their Legacy (XIXth International Congress on Ancient Bronzes)* edited by Jens M. Daehner, Kenneth Lapatin, and Ambra Spinellil, published in November 2017 by the J. Paul Getty Museum and Getty Conservation Institute. It is available online at [http://www.getty.edu/publications/artistryinbronze](http://www.getty.edu/publications/artistryinbronze) and may be downloaded free of charge in multiple formats.

## About the Book

The papers in this volume derive from the proceedings of the nineteenth International Bronze Congress, held at the Getty Center and Villa in October 2015 in connection with the exhibition *Power and Pathos: Bronze Sculpture of the Hellenistic World*. The study of large-scale ancient bronzes has long focused on aspects of technology and production. Analytical work of materials, processes, and techniques has significantly enriched our understanding of the medium. Most recently, the restoration history of bronzes has established itself as a distinct area of investigation. How does this scholarship bear on the understanding of bronzes within the wider history of ancient art? How do these technical data relate to our ideas of styles and development? How has the material itself affected ancient and modern perceptions of form, value, and status of works of art?

## Using this Repository

While stable, the structure and code of this repository are very much in a prototype stage. This is the latest in series of multiformat online collection catalogues using Quire, a new publishing framework built with [Hugo](https://gohugo.io/), an open-source [static site generator](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/). Hugo and the other associated open-source software used here allow us to produce each format (e.g., PDF, EPUB, MOBI)  from a single set of source files. Our aim is to use open web technologies and plain-text file formats to ensure the book’s longevity and portability, while still achieving a high level of design and interactivity.

[Getty Publications](http://www.getty.edu/publications/) is currently at work on more catalogues and other online publications, and we are refining our approach and rebuilding large portions of the code—all with an eye toward releasing a stable, open-source development-friendly version for broad use. Until then, making use of this existing project as the basis for new work is not recommended.

The content, on the other hand, is very stable. The research presented here has been thoroughly edited and peer-reviewed and meets the same standards the rest of our publications do. We are dedicated to maintaining the book for years to come at the permanent URL, [http://www.getty.edu/publications/artistryinbronze](http://www.getty.edu/publicationsartistryinbronze), and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the Revision History included with each of the book’s many formats.

The primary content pieces of the book can be found in the `data` and `content` directories. The master branch represents the current, published edition at all times, and the revisions branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

### Dependencies

- Node v8.9.1
- [Quire CLI v0.1.0.alpha.1](https://github.com/gettypubs/quire-cli/releases/tag/v0.1.0.alpha.1)
- Hugo v0.31
- PrinceXML 11

### Cloning with the Images Submodule

The figure images for this publication are kept in a separate, private repository and linked to this main publication repository as a submodule. When cloning the repo for further development, you’ll need to do so recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/gettypubs/artistryinbronze.git
```

Once cloned, you’ll need to change into the theme directory and install the project theme’s dependencies before running `quire preview`.

```
cd themes/quire-starter-theme-alpha
npm install
```

### The Theme

This project uses [`quire-starter-theme-alpha`](https://github.com/gettypubs/quire-starter-theme-alpha), which as its name suggests, is an alpha version of the main [`quire-starter-theme`](https://github.com/gettypubs/quire-starter-theme-alpha) being developed for Quire. 

Two files within the `quire-starter-theme-alpha` directory have been modified specifically for this publication:

1. `source/css/_variables.scss`: the `$primary-color` variable has been set to `#9eb300`
2. `source/js/search.js`: the `BASEURL` for the search index has been set to `http://www.getty.edu/publications/keepitmoving`

This is also the same themme used in [*Keep It Moving? Conserving Kinetic Art*](https://github.com/gettypubs/keepitmoving). Other than for the two exceptions noted above, all differences between the two publications are done with local overrides in the specific project’s `layouts` and `static` directories. 

## License

© 2017 J. Paul Getty Trust.

Text by Jens M. Daehner, Kenneth Lapatin, Jeffrey Maish, Timothy Potts, Erik Risser, David Saunders, Ambra Spinelli, and Timothy P. Whalen © 2017 J. Paul Getty Trust. Text by Susanne Gänsicke and Stefan Hagel © Museum of Fine Arts, Boston, and Stefan Hagel. All other text © the authors.

The text of this work and figs. 2.1, 2.3, 2.5–7, 5.1, 7.2, 7.5, 16.16–18, 23.3–4, 26.6, and 41.1–9 are licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/). All other images are reproduced with the permission of the rights holders acknowledged in captions and are expressly excluded from the CC BY license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights.
