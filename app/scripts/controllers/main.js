'use strict';

app

.controller('MainCtrl', function($scope, $location, version, $log, VideoPlayer, $window, Fullscreen, Places, $routeParams, $rootScope) {
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

    angular.forEach(Places.slides, function(slide, idx) {
        if (slide.audio) {
            addTrack(slide.audio, idx)
        }
    });

    $scope.updateCurrentSlide = function(slideId) {
        $scope.currentSlide = Places.idToSlideIndex(slideId)
        $scope.slide = Places.slides[$scope.currentSlide]
        $scope.$index = $scope.currentSlide
    }

    $rootScope.$on('$routeChangeSuccess', function(e, next, current) {
        if (current) {
            $log.info('Stopping Audio', $scope.$index)
            $rootScope.$emit('audio:stop:' + $scope.$index)
        }
        $scope.updateCurrentSlide(next.params.slide)
    })
});
