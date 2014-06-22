'use strict';

app
.controller('MapCtrl', function($log, $element, $scope, $location, Geolocation) {
  $scope.map = {
    // center: {
    //   latitude: 52.529781,
    //   longitude: 13.401393,
    // },
    options: {
      fit: true,
      streetViewControl: false,
      maxZoom: 40,
      minZoom: 12
    },
    currentPosition: {

    },
    showKml: true,
    currentMarkerOptions: {
      animation: google.maps.Animation.BOUNCE
    }
  }

  Geolocation.current().then(function(position) {
    $log.info('current position', position)
    $scope.map.currentPosition = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    }

  }).catch(function(err) {
    $log.error('Failed to read current Position', err)
  })


  $scope.kmlUrl = $location.protocol() + "://" + $location.host() + $scope.slide.maps.kml

  $log.info('kmlUrl', $scope.kmlUrl);
  $scope.kmlLayerOptions = {
    url: $scope.kmlUrl
  }

  // var kmlUrl = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';

  // $scope.kmlLayerOptions = {
  //   url: kmlUrl,
  // };
  // $scope.map = {
  //   //Chicago
  //   center: {
  //     latitude: 41.875696,
  //     longitude: -87.624207
  //   },
  //   zoom:8,
  //   showWeather: false,
  //   showTraffic: false,
  //   showCloud: false,
  //   showKml: true,
  // };
})
