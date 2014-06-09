'use strict';

app

  .controller('MainCtrl', function($scope, $location, version, $log) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
    // window.onYouTubePlayerAPIReady = function() {
    //   $log.info("Youtube Ready");
    //   $scope.player = YT.Player;
    //   $scope.$emit('player:ready', $scope.player);
    // }
  });
