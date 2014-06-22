'use strict';

app
    .controller('AudioCtrl', function($rootScope, $log, $scope, $element, usSpinnerService) {
        var self = this
        $scope.playing = false;
        $scope.mode = "paused";
        // var iframeElement = $element.find('#sc-widget')[0];
        // var iframeElementID = iframeElement.id;
        // $scope.widget = SC.Widget(iframeElement);
        var btn = $element.find('button');
        var player = $scope.audioPlayer; // $element.find('audio')[0];

        $scope.audioCanplay = false

        $rootScope.$on('audio:play:' + $scope.$index, function() {
                // $scope.playing = true
                self.play()
            // }
        })

        $rootScope.$on('audio:stop:' + $scope.$index, function() {
            // $scope.play/ing = false
            self.pause()
        })

        $element.find("button").click(function(e) {
            $scope.toggle()

        })

        $scope.toggle = function() {
            switch ($scope.mode) {
                case "paused":
                    self.play()
                case "loading":

                case "playing":
                    self.pause()
                    break
            }
        }

        this.play = function() {
            switch ($scope.mode) {
                case "paused":
                    btn.addClass("playing");
                    $log.info('network', player.network)
                    if (player.network === undefined) {
                        $scope.mode = "loading"
                        usSpinnerService.spin('audio-spinner')
                        player.one('suspend', function() {
                            self.play()
                        })
                    } else {
                        var playlistIndex = $scope.resolvePlaylistIndex($scope.$index);
                        $log.info('playing', playlistIndex)
                        player.playPause(playlistIndex, true);
                        usSpinnerService.stop('audio-spinner')
                        $scope.mode = "playing"
                    }
                    break;
                case "loading":
                case "playing":
                    break;
            }



        }

        this.pause = function() {
            btn.removeClass("playing");
            switch ($scope.mode) {
                case "paused":
                    break
                case "loading":
                  usSpinnerService.stop('audio-spinner')
                case "playing":
                    player.playPause($scope.resolvePlaylistIndex($scope.$index), true);
                    $scope.mode = "paused"
                    break
            }



        }

        // $scope.$watch('playing', function(playing) {
        //     if (playing) {
        //         self.play()
        //     } else {
        //         self.pause()
        //     }
        // }
        // )

        if ($scope.slide.autoplay) {
          self.play()
        }

    });
