'use strict';

app
    .controller('AudioCtrl', function($rootScope, $log, $scope, $element) {
        var self = this
        $scope.playing = 0;
        // var iframeElement = $element.find('#sc-widget')[0];
        // var iframeElementID = iframeElement.id;
        // $scope.widget = SC.Widget(iframeElement);
        var btn = $element.find('button');
        var audio = $element.find('audio')[0];

        $scope.audioCanplay = false
        audio.addEventListener('canplay', function() {
            $scope.audioCanplay = true;
        })

        $rootScope.$on('audio:play:' + $scope.$index, function() {
          if ($scope.slide.autoplay) {
            if ($scope.audioCanplay) {
                $scope.playing = true
            } else {
              audio.addEventListener('canplay', function() {
                  $scope.playing = true
              })
            }
          }
        })

        $rootScope.$on('audio:stop:' + $scope.$index, function() {
          $scope.playing = false
        })


        this.play = function() {
          btn.addClass("playing");
          audio.play();
        }

        this.pause = function() {
            btn.removeClass("playing");

            audio.pause();
        }

        $scope.$watch('playing', function(playing) {
            if (playing) {
              self.play()
            } else {
              self.pause()
            }
        })

    });
