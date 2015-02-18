angularBrowserifyBoilerplate
============================

Features
--------
- Our Angular Browserify boilerplate.
- Stack : browserify, angular, scss, bootstrap
- Build : grunt, bower, npm, browserify, install, build, watch

Install
-------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Build
-----
- Edit the `package.json` and `package.local.json` file
- `grunt build` to build everything
- `grunt watch:scripts` while coding

Angular, Browserify, CommonJS, dependencies
-------------------------------------------
- Browserify is used to compile the app
- If module is not CommonJS, use `browserify-shim` (for shimming and deps) and `browser` (for aliases) in `package.json`
- If module is not available via bower or npm, use napa

Notes
-----
- Templates optimization in non debug mode
- Compatible with phantomJS snapshoting 
    - Controllers update the `data-status` of the `body` tag when they finished
    - cf [https://github.com/lucasmouilleron/phantomJSBoilerplate](https://github.com/lucasmouilleron/phantomJSBoilerplate)