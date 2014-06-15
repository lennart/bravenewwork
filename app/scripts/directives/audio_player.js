'use strict';

app
    .controller('AudioCtrl', function($rootScope, $log, $scope, $element) {
        var self = this
        $scope.playing = 0;
        // var iframeElement = $element.find('#sc-widget')[0];
        // var iframeElementID = iframeElement.id;
        // $scope.widget = SC.Widget(iframeElement);
        var btn = $element.find('button');
        var player = $scope.audioPlayer; // $element.find('audio')[0];

        $scope.audioCanplay = false

        $rootScope.$on('audio:play:' + $scope.$index, function() {
          if ($scope.slide.autoplay) {
              $scope.playing = true
          }
        })

        $rootScope.$on('audio:stop:' + $scope.$index, function() {
          $scope.playing = false
        })


        this.play = function() {
          btn.addClass("playing");
          if (!player.playing) {
            player.playPause($scope.resolvePlaylistIndex($scope.$index), true);
          }
        }

        this.pause = function() {
          btn.removeClass("playing");
          if (player.playing) {
            player.playPause($scope.resolvePlaylistIndex($scope.$index), true);
          }
        }

        $scope.$watch('playing', function(playing) {
            if (playing) {
              self.play()
            } else {
              self.pause()
            }
        })

    });
