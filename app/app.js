/////////////////////////////////////////////////////////////////////
// App
/////////////////////////////////////////////////////////////////////
var angular = require("angular");
require("angular-growl");
require("angular-route");
require("angular-animate");
require("angular-loading-bar");
require("ng-dialog");
require("angular-sweetalert");

/////////////////////////////////////////////////////////////////////
var app = angular.module("app", ["app.filters", "app.controllers", "app.services", "app.directives", "ngRoute", "ngAnimate", "angular-loading-bar", "angular-growl", "ngDialog","oitozero.ngSweetAlert"]);
var routes = require("./routes.js");
var filters = require("./filters.js");
var controllers = require("./controllers.js");
var services = require("./services.js");
var directives = require("./directives.js");
var config = require("./config/config.js");

/////////////////////////////////////////////////////////////////////
if(!config.DEBUG) {
    require("./templates.js");
}

/////////////////////////////////////////////////////////////////////
app.config(function(growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition("bottom-right");
    growlProvider.onlyUniqueMessages(false);
});

/////////////////////////////////////////////////////////////////////
app.config(function($locationProvider) {
    $locationProvider.hashPrefix("!");
});

/////////////////////////////////////////////////////////////////////
app.run(function($rootScope, $timeout, $window) {
    $rootScope.config = config;
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0,0);
        }, 500);
    });
});

/////////////////////////////////////////////////////////////////////
// Some other top level app opeations

/////////////////////////////////////////////////////////////////////
module.exports = app;