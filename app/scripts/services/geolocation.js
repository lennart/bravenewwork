'use strict';

app
.service('Geolocation', function($rootScope, $window, $q) {
  var self = this

  this.supportGeolocation = !!$window.navigator

  this.current = function() {
    var q = $q.defer()

    if (self.supportGeolocation) {
      $window.navigator.geolocation.getCurrentPosition(function(position) {
        $rootScope.$apply(function() {
          q.resolve(position);
        }, function(err) {
          q.reject(err)
        })
      })
    }
    else {
      q.reject({ message: "Device does not support Geolocation"})
    }

    return q.promise
  }
})
