'use strict';

app
    .directive('bnwScroll', function($log, $window) {
        return {
            restrict: 'E',
            scope: {
              'index': '='
            },
            controller: function() {
                $log.info("[scroll] init");


            },
            link: function(scope, element, attrs) {
                var delta,
                    dragThreshold = 0.15, // "percentage" to drag before engaging
                    dragStart = null, // used to determine touch / drag distance
                    percentage = 0,
                    target,
                    windowHeight = $window.outerHeight,
                    previousTarget;

                scope.touchStart = function touchStart(event) {

                    if (dragStart !== null) {
                        return;
                    }
                    if (event.originalEvent.touches) {
                        event = event.originalEvent.touches[0];
                    }

                    // where in the viewport was touched
                    dragStart = event.clientY;

                    // // make sure we're dealing with a slide
                    target = element[0];

                    // // disable transitions while dragging
                    // target.classList.add('no-animation');

                    // previousTarget = slides.eq(currentSlideIndex - 1)[0];
                    // previousTarget.classList.add('no-animation');
                }

                scope.touchMove = function touchMove(event) {

                    if (dragStart === null) {
                        return;
                    }
                    if (event.originalEvent.touches) {
                        event = event.originalEvent.touches[0];
                    }

                    delta = dragStart - event.clientY;
                    percentage = delta / windowHeight;

                    // // Going down/next. Animate the height of the target element.
                    // if (percentage > 0) {
                    //     target.style.height = (100 - (percentage * 100)) + '%';
                    //     if (previousTarget) {
                    //         previousTarget.style.height = ''; // reset
                    //     }
                    // }

                    // // Going up/prev. Animate the height of the _previous_ element.
                    // else if (previousTarget) {
                    //     previousTarget.style.height = (-percentage * 100) + '%';
                    //     target.style.height = ''; // reset
                    // }

                    // Don't drag element. This is important.
                    // return false;
                }

                scope.touchEnd = function touchEnd() {

                    dragStart = null;
                    target.classList.remove('no-animation');
                    if (previousTarget) {
                        previousTarget.classList.remove('no-animation');
                    }

                    if (percentage >= dragThreshold) {
                        scope.$emit('scroll:next', scope.index);
                    } else if (Math.abs(percentage) >= dragThreshold) {
                        scope.$emit('scroll:prev', scope.index);
                    } else {
                        // show current slide i.e. snap back
                        scope.$emit('scroll:show', scope.index);
                    }

                    percentage = 0;

                }
                element.on({
                    'touchstart': scope.touchStart,
                    'touchmove': scope.touchMove,
                    'touchend': scope.touchEnd
                });
            }
        }
    })
