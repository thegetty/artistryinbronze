# Quire Catalogue Starter Kit

This repository contains a starter Hugo site for use with the **Quire** project
(a suite of digital publishing tools from Getty Publications). Use this kit
to kick off development of a digital art catalogue or similar publication.

## About Hugo

Hugo is a static-site-generator written in Go. It's free and open-source. You'll
need to install it before you can use this kit (`brew install hugo` if you're
on a Mac and using Homebrew). For more information about installing or using
Hugo, visit [https://gohugo.io](https://gohugo.io/).

## Getting Started

Clone this repository into your working directory:
```
git clone https://github.com/gettypubs/quire-catalogue.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-git-url
```

Install dependencies:
```
bin/setup.sh
```

At this point you may want to change values in the `config.yml` file (for
example, change the `baseurl` value to wherever you intend to publish the site).

## Usage

Run the server to preview:
```
hugo server
```

(Optional) Run `webpack` in the theme subfolder if you want to customize
CSS or Javascript:
```
cd themes/quire-catalogue-theme
./node_modules/.bin/webpack --output-public-path="path-from-your-baseurl-if-any" --watch
```

Build the static site when ready:
```
hugo
```

(Optional) Deploy to Github Pages:
```
bin/deploy.sh
```

## Credits

## License
