#!/bin/bash

# Load variables from the config file
CONFIG="./bin/config.cfg"
source $CONFIG

# Run the Hugo and Gulp concurrently
trap "kill %1" EXIT
hugo server & cd "themes/$THEME" && ./node_modules/.bin/webpack --watch
# cd "themes/$THEME" && ./node_modules/.bin/webpack --watch & cd "../.." && hugo server
