# SeraphimRootServerBackend

Node server behind the root server, controls the data and socket connections.

## Installation

- Clone this repo
- run `npm install` Might take a while
- to begin, run `npm start` this will begin the server on port 4300

## Notes

- This was built and tested on node version 10.15.0
- This server provides a basic API, that i have yet to properly publish. To see what paths you can get just peek into index.js
- This repo does not come wiht a UI, please find the one under SeraphimRootServerFrontEnd
- MASSIVE WIP!

### To build with nw-gyp

- Navigate to `node_modules/<package>/bindings` || if sqlite3 `node_modules/sqlite3`
- run `nw-gyp configure --target=0.33.4` (or whatever version installed)
- This will create a vcxproj file in the `build/` directory (or a MAKEFILE on other platforms)
- run `nw-gyp build --target=0.33.4`

- Issues: - `https://github.com/nwjs/nw.js/issues/6552#issuecomment-402382908`
- `npm install --global --production windows-build-tools --vs2017`
- `C:\Users\AppData\Roaming\npm\node_modules\nw-gyp\gyp\pylib\gyp\MSVSVersion.py`
- change default toolset of first 2 2015 versions to v141

## Other things

If you want/need to get this up and running, just shoot me an email terraseraph@gmail.com
