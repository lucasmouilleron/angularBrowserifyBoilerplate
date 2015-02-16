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
//var app = angular.module("app", ["app.filters","app.services","app.directives","app.controllers", "ngRoute", "ngAnimate", "angular-loading-bar", "angular-growl", "ngDialog","oitozero.ngSweetAlert"]);
var app = angular.module("app", ["app.filters", "app.controllers", "app.services", "app.directives", "ngRoute", "ngAnimate", "angular-loading-bar", "angular-growl", "ngDialog","oitozero.ngSweetAlert"]);
require("./routes.js");
require("./filters.js");
require("./controllers.js");
require("./services.js");
require("./directives.js");

/////////////////////////////////////////////////////////////////////
app.config(["growlProvider", function(growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition("bottom-right");
    growlProvider.onlyUniqueMessages(false);
}]);

/////////////////////////////////////////////////////////////////////
app.config(["$locationProvider", function($location) {
    $location.hashPrefix("!");
}]);

/////////////////////////////////////////////////////////////////////
app.run(["$rootScope", "$timeout", "$window", function ($rootScope, $timeout, $window) {
    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0,0);
        }, 500);
    });
}]);

/////////////////////////////////////////////////////////////////////
// Some other top level app opeations

/////////////////////////////////////////////////////////////////////
module.exports = app;