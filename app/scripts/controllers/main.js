'use strict';

app

.controller('MainCtrl', function($scope, $location, version, $log, VideoPlayer, $window, Fullscreen) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;



    VideoPlayer.get().then(function(player) {
        $log.info('got player', player);
    })
        .
    catch (function(err) {
        $log.error('error in video player', err);
    })
    // window.onYouTubePlayerAPIReady = function() {
    //   $log.info("Youtube Ready");
    //   $scope.player = YT.Player;
    //   $scope.$emit('player:ready', $scope.player);
    // }
    //
    Fullscreen.all();

    $log.info('Standalone', $window.navigator.standalone)



});
