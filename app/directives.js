/////////////////////////////////////////////////////////////////////
// Directives
/////////////////////////////////////////////////////////////////////
var directives = require("angular").module("app.directives", []);
var $ = require("jquery");

/////////////////////////////////////////////////////////////////////
directives.directive("customNav", function($location, ngDialog, SweetAlert, growl) {

    function link($scope, $element, $attrs) {

        $(".nav a").on("touchend", function(){
            $(".btn-navbar").click();
            $(".navbar-toggle").click()
        });

        $scope.routeIs = function(routeName) {
            return $location.path().indexOf(routeName) == 0;
        };        

        $scope.alert = function() {
            SweetAlert.swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!"
            }, 
            function(){ 
                growl.error("Stuff deleted !");
            });
        };

        $scope.test = "Settings";
        $scope.popin = function() {
            ngDialog.open({
                template: "./app/views/popin.html",
                controller:  "popinController",
                showClose: false,
                closeByEscape: false,
                closeByDocument: false,
                scope : $scope
            });
        }
    }

    return {
        link: link,
        templateUrl: "./app/views/nav.html"
    }
});

/////////////////////////////////////////////////////////////////////
directives.directive("appVersion", function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
});

/////////////////////////////////////////////////////////////////////
directives.directive("whenScrolled", function($window, $timeout) {
    return function(scope, elm, attr) {
        var theWindow = angular.element($window);
        var raw = elm;
        var busy = false;
        var defaultOffset = -100;
        $timeout(function() {
            theWindow.bind("scroll", function() {
                if (!busy && $(this).height() + $(this).scrollTop() >= $(raw).outerHeight() + $(raw).offset().top + defaultOffset) {
                    busy = true;
                    scope.$apply(attr.whenScrolled);
                    $timeout(function() {
                        busy = false;
                    }, 1000);
                }
            });
        }, 1000);
    };
});

/////////////////////////////////////////////////////////////////////
module.exports = directives;