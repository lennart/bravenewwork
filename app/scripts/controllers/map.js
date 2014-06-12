'use strict';

app
.controller('MapCtrl', function($log, $element, $scope, $location) {
  $scope.map = {
    center: {
      latitude: 52.529781,
      longitude: 13.401393,
    },
    zoom: 17,
    showKml: true
  }

  $scope.kmlUrl = $location.absUrl() + "/data/01-ausland.kml"

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
