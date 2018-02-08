# EPUB Generation

This version of Quire uses [`pe-epub`](https://github.com/peoples-e/pe-epub) for EPUB rendering. The `content/epub.md` file and the `data/epub.html` template output `epub.json` in a format ready for ingestion by `pe-epub`. As noted in the steps below, temporary changes must be made to a couple of layout templates, and a list of regular expression changes must be applied to the built files in order to output an EPUB that passes epubcheck 3.0.1.

The way `pe-epub` is currently working, it requires `pe-epub-fs` to also be used and for local file paths to be explicitly defined in the files in order to properly ingest and manifest images and other assets. Also, `pe-epub` requires running an early version of node.js. In this case v0.12.4, though something later might also work. Anything later than 6.9.4 definitely doesn't work.

## STEP 1

Temporarily simplify the `layouts/_default/baseof.html` and `layouts/section-head/single.html` (local override version) templates to remove unneeded navigational/interface elements, including the abstract listings in `section-head`, and the use of `<main>` element, which must be switched to a `<div>`.

## STEP 2

```
quire build
```

## STEP 3

Run “Find and Replace” regex patters on the files in the `public` directory, as listed below.

## STEP 4

```
node [FILEPATH]/build-epub.js
```

## STEP 5

```
java -jar [FILEPATH]/epubcheck-3.0.1.jar [FILEPATH]/artistryinbronze.epub
```

## BEFORE EPUB CONVERSION -- CHANGES TO `PUBLIC` DIRECTORY

// image source for figures in essays within subdirectories:
```
src="../../assets/img/figures/
src="file:///Users/galbers/GitHub/artistryinbronze/public/assets/img/figures/
```

// image source for CC and Getty logo PNGs:

```
src="(\.+?)/assets/img/(.+?)\.png"
src="file:///Users/galbers/GitHub/artistryinbronze/public/assets/img/$2.png"
```

// for footnote fn: and fnref: links/ids, to eliminate colons:

```
f([a-z]{1,4}):([0-9])
f$1-$2
```

// arbitrary change for IDs starting with a numeral, auto-created by Hugo from headings:

```
id="([0-9])
id="n$1
```

// internal links, in or out of subdirectories, with or without anchors:

```
href="(\.\./){1,2}(.+?)/(.+?)/([#|"])(.*?)(["|>])
href="$2-$3.xhtml$4$5$6
```

// internal links, within same directory level, with or without anchors:

```
href="\.\./(.*?)/([#|"])(.*?)(["|>])
href="$1.xhtml$2$3$4
```

// homepage:

```
href="\.\./"
href="index.xhtml"
```

// Delete About page entry from Contents:

```
<li class="quire-contents__page quire-noprint"><a href="about.xhtml"><span class="quire-title">About</span></a></li>
```

// Delete two SVGs from Cover:

```
<svg(.|\s)*?</svg>
```


