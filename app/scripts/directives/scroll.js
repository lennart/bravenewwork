'use strict';

app
    .directive('bnwScroll', function($log, $swipe, $window, $document) {
        return {
            restrict: 'E',
            scope: {
              'slideId': '='
            },
            controller: function() {
                $log.info("[scroll] init");


            },
            link: function(scope, element, attrs) {
                var delta,
                    dragThreshold = 0.15, // "percentage" to drag before engaging
                    windowHeight = $window.outerHeight

                scope.dragStart = null // used to determine touch / drag distance
                scope.percentage = 0

                // scope.y = 0
                    // target,

                    // previousTarget;

                scope.touchStart = function touchStart(event) {
                    if (scope.dragStart !== null) {
                        return;
                    }
                    // if (event.originalEvent.touches) {
                    //     event = event.originalEvent.touches[0];
                    // }

                    // where in the viewport was touched
                    scope.dragStart = event.clientY;

                    // // make sure we're dealing with a slide
                    // target = element[0];

                    // // disable transitions while dragging
                    // target.classList.add('no-animation');

                    // previousTarget = slides.eq(currentSlideslideId - 1)[0];
                    // previousTarget.classList.add('no-animation');
                }

                scope.touchMove = function touchMove(event) {
                    if (scope.dragStart === null) {
                        return;
                    }
                    // if (event.originalEvent.touches) {
                    //     event = event.originalEvent.touches[0];
                    // }

                    delta = scope.dragStart - event.clientY;

                    scope.percentage = delta / windowHeight;

                    $log.debug('percent dragged', scope.percentage)

                    // // Going down/next. Animate the height of the target element.
                    // if (scope.percentage > 0) {
                    //     target.style.height = (100 - (scope.percentage * 100)) + '%';
                    //     if (previousTarget) {
                    //         previousTarget.style.height = ''; // reset
                    //     }
                    // }

                    // // Going up/prev. Animate the height of the _previous_ element.
                    // else if (previousTarget) {
                    //     previousTarget.style.height = (-scope.percentage * 100) + '%';
                    //     target.style.height = ''; // reset
                    // }

                    // Don't drag element. This is important.
                    // return false;
                }

                scope.touchEnd = function touchEnd() {

                    scope.dragStart = null;
                    // target.classList.remove('no-animation');
                    // if (previousTarget) {
                    //     previousTarget.classList.remove('no-animation');
                    // }

                    if (scope.percentage >= dragThreshold) {
                        scope.$emit('scroll:next', scope.slideId);
                    } else if (Math.abs(scope.percentage) >= dragThreshold) {
                        scope.$emit('scroll:prev', scope.slideId);
                    } else {
                        // show current slide i.e. snap back
                        scope.$emit('scroll:show', scope.slideId);
                    }

                    scope.percentage = 0;

                }
                // $document.on('scroll', function(e) {
                //   $log.debug('scroll', e);
                // })
                // element.on('pointerdown', scope.touchStart)
                // element.on('pointermove', scope.touchMove)
                // element.on('pointerup', scope.touchEnd)
                // $swipe.bind(element, {
                //   'start': scope.touchStart,
                //   'move': scope.touchMove,
                //   'end': scope.touchEnd
                // })
                //
            }
        }
    })
