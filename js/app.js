var UserManagementApp = angular.module('UserManagementApp', ['ngRoute', 'UMControllers', 'ui.bootstrap']);

// ROUTING MVC Angular Application
UserManagementApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl' // home controller
      }).
      when('/listUsers', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl' // users controller
      }).   
      otherwise({
        redirectTo: '/listUsers'
      });
  }]);


