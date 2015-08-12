#!/bin/bash

## npm install electron-prebuilt -g
## npm install asar -g

if [ ! -d "Eletron.app" ]; then
  cp -r /usr/local/lib/node_modules/electron-prebuilt/dist/Electron.app .
fi

asar pack app Electron.app/Contents/Resources/app.asar
