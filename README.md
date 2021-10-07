# Radio Player
This was a very simple quick app that I wrote to embed two of the most popular radio playing websites in the UK, into a desktop app for the main 3 platforms.
I totally get that this app offers no more fexability than browsing to them in your web browser. But it just provides a simple app to get to them quickly.
When I am working. I have this in my dock (macOS) and just click it to get music going quickly, it also means that I don't have the radio playing in my browser.

[![Build](https://github.com/johnhart96/radio-player/actions/workflows/autobuild.yml/badge.svg)](https://github.com/johnhart96/radio-player/actions/workflows/autobuild.yml)

## Supported platforms
Here is the list of supported platform. Some it has been verified and tested on.
* MacOS - Apple Silicon (Verified)
* MacOS - Intel amd64
* Windows 10 or 11 - amd64 (Verified)
* Windows 10 or 11 - arm64 (Verified)
* Linux - Ubuntu - amd64

## How to build
This app is automaticly built using GitHub actions, but to build it yourself please follow these basic steps.
You will need to have node.js installed first: https://nodejs.org/en/

1) Clone the repo into a folder on your pc.
2) Open a terminal / powershell window to the directory of your build location
3) run: npm install
4) run: npm audit fix --force
5) Check that the app runs using: npm start
6) Run one of the following build scripts:
* Linux: npm dist:linux
* MacOS: npm dist:macos
* Windows: npm dist:win

