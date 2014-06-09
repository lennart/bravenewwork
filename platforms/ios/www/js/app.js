// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform, $rootScope) {
  $rootScope.longitude = 0
    $rootScope.latitude = 0
    // navigator.geolocation.watchPosition = function(success, error, options) {
    //     setInterval(function() {
    //         console.log("watchingPosition")
    //         navigator.geolocation.getCurrentPosition(success, error, options)
    //     }, 1000)
    // }
    navigator.geolocation.watchPosition(
        function(position) {
          $rootScope.$apply(function() {
            $rootScope.longitude = position.coords.longitude
            $rootScope.latitude = position.coords.latitude
          })

            // alert('pos long ' + position.coords.longitude + 'lat'+ position.coords.latitude)
        },
        function(err) {
          switch(err.code) {
            case navigator.geolocation.PositionError.TIMEOUT:
              alert('TIMEOUT error: ' + err.message)
              break;
            case navigator.geolocation.PositionError.POSITION_UNAVAILABLE:
              alert('POSITION_UNAVAILABLE error: ' + err.message)
              break;
            case navigator.geolocation.PositionError.PERMISSION_DENIED:
              alert('PERMISSION_DENIED error: ' + err.message)
              break;

          }
        }, {
            enableHighAccuracy: true
        }
    )
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

    });
})
