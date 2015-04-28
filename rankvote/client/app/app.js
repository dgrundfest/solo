angular.module('rankvote', [
  'rankvote.admin'
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/poll', {
      templateUrl: 'app/admin/admin.html',
      controller: 'adminController'
    })
    .otherwise({
      redirectTo: '/poll'
    });
});