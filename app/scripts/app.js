'use strict';

var app = angular.module('lennart.Audiowalk', [
               'ngAnimate',
               'ngRoute',
               // 'ui.bootstrap',
               // 'ngTouch',
               'slick',
               'duScroll',
               'FBAngular',
               'google-maps',
               'ui.bootstrap',
               'fitVids'
               ])

  app.constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/features', {
        templateUrl: 'views/features.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

