'use strict';

angular.module('profileApp',[
    'ngRoute',
    'ngResource',
    'profileApp.profileController',
    'profileApp.profileServices'
])

.config(['$routeProvider',
       function($routeProvider) {
        $routeProvider.when('/',{
            templateUrl: 'view/profileTemplate.html',
            controller: 'ProfileController'
        });
  }]);