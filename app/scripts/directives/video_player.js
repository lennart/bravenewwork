'use strict';
// UNUSED, Don't know if we need JS API for YouTube
app

.directive('bnwVideoPlayer', function($log, VideoPlayer, $timeout) {

    return {
        restrict: 'E',
       // scope: true,
        // controller: function($scope) {



        // },
        link: function(scope, element, attrs) {
            // $log.debug('attributes', attrs);
            var playerId = 'video-player-' + scope.index;

            element.find('.video-player').attr('id', playerId);
            var button = element.find('.btn-video-play')
            var spinner = element.find('.spinner');
            var playSign = element.find('.glyphicon-facetime-video');
            scope.videoLoaded = false;
            scope.playing = false;

            var videoWrapper = element.find('.video-wrapper');
            var video = element.find('video')[0];

            button.click(function() {
                scope.loading = true;
                scope.playing = true;
                spinner.removeClass('hide');
                playSign.addClass('hide');
                $timeout(function() {
                  VideoPlayer.get().then(scope.loadVideo).
                  catch (function(err) {
                      $log.error('error on player get', err);
                  })
                },3000);
            })
            scope.loadVideo = function(player) {
                $log.info('player on click', player, playerId);
                if (scope.videoLoaded) {
                    scope.onVideoReady();
                } else {
                    scope.onVideoReady();
                    // video.play()
                    // scope.player = new(player)(playerId, {
                    //   width: '1280',
                    //   height: '800',
                    //   videoId: 'i9MHigUZKEM', //'PFVcfyqm9_Y',
                    //   playerVars: {
                    //     controls: 0,
                    //     modestbranding:1,
                    //     rel: 0,
                    //     autoplay: 0,
                    //     playsinline: 1,
                    //     showinfo: 0
                    //   },
                    //   events: {
                    //     'onReady': scope.onVideoReady,
                    //     'onStateChange': scope.onStateChange
                    //   }
                    // });
                }

            };

            video.addEventListener('playing', function() {
                videoWrapper.removeClass('hide');
                button.addClass('hide');
            })

            video.addEventListener('pause', function() {
                button.removeClass('hide');
                videoWrapper.addClass('hide');
                playSign.removeClass('hide');
            })

            scope.onVideoReady = function(event) {
                scope.videoLoaded = true;
                video.play()
                scope.playing = true;
                scope.loading = false;
                spinner.addClass('hide');

            }

            scope.onStateChange = function(event) {
                // -1 – unstarted
                // 0 – ended
                // 1 – playing
                // 2 – paused
                // 3 – buffering
                // 5 – video cued
                // YT.PlayerState.ENDED
                // YT.PlayerState.PLAYING
                // YT.PlayerState.PAUSED
                // YT.PlayerState.BUFFERING
                // YT.PlayerState.CUED
                $log.info('state change', event);
                switch (event.data) {
                    case YT.PlayerState.PLAYING:
                    case YT.PlayerState.BUFFERING:
                        videoWrapper.removeClass('hide');
                        button.addClass('hide');
                        break;
                    case YT.PlayerState.ENDED:
                    case YT.PlayerState.PAUSED:
                        button.removeClass('hide');
                        videoWrapper.addClass('hide');
                        break;
                }
            }

            scope.stopVideo = function() {
                player.pause();
                scope.playing = false;
            }

            // scope.$on('player:ready', function(event, player) {
            //   $scope.loadVideo(player);
            // })


        }
        // compile: function compile(tElement, tAttrs) {
        //   tElement.html('<div id="ytplayer"></div>');
        //   return function postLink(scope, element, attrs, controller) {

        //     // Replace the 'ytplayer' element with an <iframe> and
        //     // YouTube player after the API code downloads.
        //     var player;
        //     $log.info('inside postlink', scope);
        //
        //   };
        // }
    };

});
