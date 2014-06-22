'use strict';

var app = angular.module('lennart.Audiowalk', [
    'ngAnimate',
    'ngRoute',
    'mediaPlayer',
    'ngTouch',
    'ngSanitize',
    'angularSpinner',
    'FBAngular',
    'google-maps',
    'fitVids',
    'angular-loading-bar'
])

app.constant('version', 'v0.1.0')

.config(function($locationProvider, $routeProvider) {

    // $locationProvider.html5Mode(true);

    $routeProvider
        .when('/kaffee-kochen', {
            templateUrl: 'views/kaffee-kochen.html'
        })
        .when('/:slide?', {
            templateUrl: 'views/home.html',
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });


})
    .run(function($rootScope, $location, $log) {

    });
