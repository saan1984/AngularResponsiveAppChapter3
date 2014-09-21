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
 }])

.directive("responsiveimage",
    ["$log","$window",
    function ($log, $window) {
    return {
        restrict:'E',
        replace:true,
        scope: {
            'respalt': '@imagealt',
            'respsrc': '@imagesrc'
        },
        template: '<img class="profile-image"' +
                  'ng-src="{{modifiedsrc}}" alt="{{respalt}}"/>',
        link : function(scope, element, attribute){
            scope.width = $window.outerWidth;
            scope.$watch("width",function(newWidth,oldWidth){
                $log.log("New width of window : ",newWidth);
                if(newWidth <= 400){
                   scope.modifiedsrc = scope.respsrc +"?s=80";
                }else if(newWidth >400 && newWidth <=767){
                    scope.modifiedsrc = scope.respsrc +"?s=150";
                }else{
                    scope.modifiedsrc = scope.respsrc +"?s=250";
                }
            });
            angular.element($window).bind('resize',function(){
                //Asking AngularJS to run digest cycle
                scope.$apply(function(){
                    scope.width = $window.outerWidth;
                })
            });
        }};
}]);