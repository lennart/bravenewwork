'use strict';

app
    .service('VideoPlayer', function($window, $log, $q) {

        this.get = function() {
            var q = $q.defer();
            if ($window.YT) {
                q.resolve(YT.Player);
            }
            else {
                $window.onYouTubeIframeAPIReady = function() {
                    $log.info('YouTube Player API Ready', YT.Player)
                    q.resolve(YT.Player)
                }
            }

            return q.promise;
        }

    })
