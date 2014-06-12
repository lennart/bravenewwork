'use strict';

app
    .controller('VideoCtrl', function($element, $log, $document) {

        // var iframes = $element.find('video');
        // var preventTouch = function(e) {
        //     $log.info('preventing touch events', e);
        //     // e.preventDefault();
        // },
        // allowTouch = function(e) {
        //   $log.info('allowing touch events', e);
        // }

        // $log.info('iframes', iframes);
        // angular.forEach(iframes, function(el) {
        //     // var el = iframe.contents().find('body');
        //     $log.info('registering prevention handler on', el);

        //     el.addEventListener("dragstart", preventTouch);
        //     el.addEventListener("dragend", allowTouch);
        //     el.addEventListener("click", preventTouch);
        //     el.addEventListener("mousedown", preventTouch);
        //     el.addEventListener("touchstart", preventTouch);
        //     el.addEventListener("touchend", allowTouch);
        //     el.addEventListener("touchcancel", preventTouch);
        //     el.addEventListener("touchleave", preventTouch);
        //     el.addEventListener("touchmove", preventTouch);
        // })
    });
