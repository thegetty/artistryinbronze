#!/bin/bash

# Load variables from the config file
CONFIG="./bin/config.cfg"
source $CONFIG

# Check if Hugo is installed
command -v hugo >/dev/null 2>&1 || {
    echo >&2 "Please install Hugo before proceeding: https://gohugo.io/"; exit 0;
}

# Check if node is installed
command -v node >/dev/null 2>&1 || {
    echo >&2 "Please install Node.js before proceeding."; exit 0;
}

# Install the theme if it hasn't been downloaded already
if [ ! -d "./themes/$THEME" ]; then
    cd themes && git clone $THEME_URL
    cd ..
fi

# Install theme dependencies
cd "themes/$THEME" && npm install

# Confirmation message
echo "Theme successfully installed. Type npm run preview to view local changes."
