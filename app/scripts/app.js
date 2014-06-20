'use strict';

var app = angular.module('lennart.Audiowalk', [
    'ngAnimate',
    'ngRoute',
    'mediaPlayer',
    // 'ui.bootstrap',
    'ngTouch',
    'slick',
    'duScroll',
    'ngSanitize',
    'angularSpinner',
    'FBAngular',
    'google-maps',
    // 'ui.bootstrap',
    'fitVids',
    'angular-loading-bar'
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


})
    .run(function($rootScope, $location, $log) {
        $rootScope.$on('duScrollspy:becameActive', function($event, $element) {
            //Automaticly update location
            $log.debug('scroll spy active', $element.data('slideId'));
            var hash = $element.data('slideId');
            if (hash) {
                $location.search({ 'slide': hash }).replace();
                $rootScope.$apply();
                $rootScope.$on('slide:changed', hash)
            }
        });
    });
