angularRequireJsBoilerplate
===========================

Features
--------
- A nice angular browserify boilerplate
- Stack : requirejs, angular, scss, bootstrap, fontawesome
- Build : install, build, watch, grunt, bower

Install
-------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Build
-----
- edit `local.package.json` if needed
- `npm install && grunt build`



Notes
-----
- Compatible with phantomJS snapshoting 
    - Controllers update the `data-status` of the `body` tag when they finished
    - cf [https://github.com/lucasmouilleron/phantomJSBoilerplate](https://github.com/lucasmouilleron/phantomJSBoilerplate)