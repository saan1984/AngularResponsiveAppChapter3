'use strict';

angular.module('profileApp',[
    'ngRoute',
    'ngResource',
    'profileApp.profileController',
    'profileApp.profileServices',
    'profileApp.deviceTypeProvider'
])

.config(['$routeProvider','deviceTypeProvider',
       function($routeProvider,deviceTypeProvider) {

        var deviceTypeProvider = deviceTypeProvider.$get(),
            deviceType = deviceTypeProvider.getDeviceType();

        /*Route to Desktop view*/
        $routeProvider.when('/',{
            templateUrl: 'view/'+deviceType+'/profileTemplate.html',
            controller: 'ProfileController',
            styleType:deviceType
        });
  }]);