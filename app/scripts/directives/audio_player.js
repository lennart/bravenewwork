'use strict';

app
    .controller('AudioCtrl', function($log, $scope, $element) {
        // $log.debug('attributes', attrs);
        //
        $scope.playing = 0;
        var iframeElement = $element.find('#sc-widget')[0];
        var iframeElementID = iframeElement.id;
        $scope.widget = SC.Widget(iframeElement);
        var btn = $element.find('button');

        $scope.$watch('playing', function(playing) {
            if (playing) {
                btn.addClass("playing");
                $scope.widget.play();
            } else {
                btn.removeClass("playing");
                $scope.widget.pause();
            }
        })

    });
