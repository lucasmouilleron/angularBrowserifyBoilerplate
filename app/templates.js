angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./app/views/github.html',
    "<h1>Repositories of {{githubUser}}</h1>\n" +
    "\n" +
    "<div class=\"repos\">\n" +
    "    <div class=\"repo\" ng-repeat=\"repo in theRepos\">\n" +
    "        <h2>{{repo.name}}</h2>\n" +
    "        <a href=\"{{repo.url}}\">{{repo.url}}</a>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('./app/views/nav.html',
    "<div class=\"navbar navbar-fixed-top navbar-inverse\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"#!/\">angularRequireJs <small><app-version/></small></a>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-collapse collapse\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li ng-class=\"{active: routeIs('/reddits')}\"><a href=\"#!/reddits\">Infinite Reddits</a></li>\n" +
    "        <li ng-class=\"{active: routeIs('/github')}\"><a href=\"#!/github/lucasmouilleron\">Github</a></li>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li><button class=\"btn navbar-btn\" ng-click=\"popin()\"><i class=\"fa fa-cog\"></i> Settings</button></li>\n" +
    "        <li><button class=\"btn navbar-btn\" ng-click=\"alert()\"><i class=\"fa fa-plane\"></i> Alert</button></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('./app/views/popin.html',
    "<h1>{{test}} popin</h1>\n" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. Quamquam id quidem, infinitum est in hac urbe; Duo Reges: constructio interrete. Quod mihi quidem visus est, cum sciret, velle tamen confitentem audire Torquatum.</p>\n" +
    "\n" +
    "<div class=\"pull-right\">\n" +
    "    <button class=\"btn\" ng-click=\"closeThisDialog()\">Cancel</button>\n" +
    "    <button class=\"btn btn-success\" ng-click=\"save()\">Confirm</button>\n" +
    "</div>\n" +
    "<div class=\"clearfix\"></div>\n"
  );


  $templateCache.put('./app/views/reddits.html',
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui reperies, inquit, in hoc quidem pertinacem; Quae similitudo in genere etiam humano apparet. Duo Reges: constructio interrete. Sit enim idem caecus, debilis. Unum est sine dolore esse, alterum cum voluptate. Graecis hoc modicum est: Leonidas, Epaminondas, tres aliqui aut quattuor; Duo enim genera quae erant, fecit tria. Facillimum id quidem est, inquam.</p>\n" +
    "\n" +
    "<div class=\"reddits\">\n" +
    "    <div when-scrolled=\"loadMore()\">\n" +
    "        <div class=\"reddit\" ng-repeat=\"reddit in theReddits\">\n" +
    "            <h2>{{reddit.title}}</h2>\n" +
    "            <p>{{reddit.score}}</p>\n" +
    "            <a href=\"{{reddit.url}}\">{{reddit.url}}</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );

}]);
