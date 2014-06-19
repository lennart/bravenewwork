'use strict';

app

.controller('MainCtrl', function($scope, $location, version, $log, VideoPlayer, $window, Fullscreen, StoryBoard) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

    var slides = StoryBoard()

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
    var audioMapping = {

    }

        function slideIndexToPlaylist(index) {
            return audioMapping[index]
        }

    var playlist = $scope.audioPlaylist = [];

    $scope.resolvePlaylistIndex = slideIndexToPlaylist

    function addTrack(track, index) {
        audioMapping[index] = playlist.length
        $scope.audioPlaylist.push({
            src: track
        })
    }

    angular.forEach(slides, function(slide, idx) {
        if (slide.audio) {
            addTrack(slide.audio, idx)
        }
    });

});
