/////////////////////////////////////////////////////////////////////
// Controllers
/////////////////////////////////////////////////////////////////////
var controllers = require("angular").module("app.controllers", []);

/////////////////////////////////////////////////////////////////////
controller = controllers.controller("redditsController", function($scope, $q, Reddits) {
    var next = 0;
    var promises = [];
    $scope.theReddits = [];
    $scope.loadMore = function() {
        return Reddits.from(next).then(function(redditsResponse) {
            next = redditsResponse.next;
            for (i in redditsResponse.items) {
                $scope.theReddits.push(redditsResponse.items[i]);
            }
        });
    };
    var promise = $scope.loadMore();
    promises.push(promise);

    $q.all(promises).then(function() {
        $scope.$parent.status = "ready";
    });
});

/////////////////////////////////////////////////////////////////////
controllers.controller("githubController", function($scope, $q, $routeParams, Github) {
    var promises = [];
    $scope.githubUser = $routeParams.anId;
    var promise = Github.all($scope.githubUser).then(function(repos) {
        $scope.theRepos = repos;
    });
    promises.push(promise);

    $q.all(promises).then(function() {
        $scope.$parent.status = "ready";
    });
});

/////////////////////////////////////////////////////////////////////
controllers.controller("popinController", function($scope, growl) {
    $scope.save = function() {
        growl.success("Stuff saved !");
        $scope.closeThisDialog();
    }
});

/////////////////////////////////////////////////////////////////////
module.exports = controller;