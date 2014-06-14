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

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/kaffee-kochen', {
        templateUrl: 'views/kaffee-kochen.html'
      })
      .when('/:slide?', {
        templateUrl: 'views/home.html',
        reloadOnSearch: false
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

