'use strict';

app
    .controller('PlacesCtrl', function($rootScope, $scope, $sce, $routeParams, StoryBoard, $log, $window, $element, $location, $timeout, Geolocation, $document) {
        var slides = $scope.slides = StoryBoard()


        var EasingFunctions = {
          // no easing, no acceleration
          linear: function (t) { return t },
          // accelerating from zero velocity
          easeInQuad: function (t) { return t*t },
          // decelerating to zero velocity
          easeOutQuad: function (t) { return t*(2-t) },
          // acceleration until halfway, then deceleration
          easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
          // accelerating from zero velocity
          easeInCubic: function (t) { return t*t*t },
          // decelerating to zero velocity
          easeOutCubic: function (t) { return (--t)*t*t+1 },
          // acceleration until halfway, then deceleration
          easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
          // accelerating from zero velocity
          easeInQuart: function (t) { return t*t*t*t },
          // decelerating to zero velocity
          easeOutQuart: function (t) { return 1-(--t)*t*t*t },
          // acceleration until halfway, then deceleration
          easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
          // accelerating from zero velocity
          easeInQuint: function (t) { return t*t*t*t*t },
          // decelerating to zero velocity
          easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
          // acceleration until halfway, then deceleration
          easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
        }

        // $scope.slides = []
        //



        var api = {}
        var speed = 300
        var cssEase = "ease-in"


            function idToSlideIndex(slides, id) {
                var match = slides.filter(function(x) {
                    return x.id == id
                })

                return match[0] ? slides.indexOf(match[0]) : 0
            }

            function indexToSlideId(slides, index) {
                var slide

                return (slide = slides[index]) ? slide.id : null
            }

        api.onBeforeChange = function onBeforeChange() {
            $log.info('onBeforeChange', arguments);
            $scope.lastSlide = $scope.currentSlide;

            $rootScope.$emit('audio:stop:' + $scope.currentSlide)
        }

        api.onAfterChange = function onAfterChange() {

            $timeout(function() {
                $log.info('slide changed', $scope.currentSlide, id, 'last slide', $scope.lastSlide);
                var id = indexToSlideId($scope.slides, $scope.currentSlide);
                if (id) {
                    // $location.search({
                    //     'slide': id
                    // }).replace()

                    $rootScope.$emit('audio:play:' + $scope.currentSlide)
                }
            }, speed);
        }

        $scope.$on('scroll:next', function(event, id) {
          $log.info('[places] scroll:next ', id)
          var index = idToSlideIndex(slides, id)
          var slide = slides[index+1]

          if (slide) {
            $log.debug('[places] going to next slide', slide.id)
            $scope.$apply( $location.path(slide.id) )
          }
          else {
            $log.debug('[places] there\'s no way further from', slides[index])
          }
        })

        $scope.$on('scroll:prev', function(event, id) {
          $log.info('[places] scroll:prev ', id)

          var index = idToSlideIndex(slides, id)
          var slide = slides[index-1]

          if (slide) {
            $log.debug('[places] going to prev slide', slide.id)
            $scope.$apply( $location.path(slide.id) )
          }
          else {
            $log.debug('[places] there\'s no way back from', slides[index])
          }
        })

        $scope.$on('scroll:show', function(event, index) {
          $log.info('[places] scroll:show ', index)
        })

        api.speed = speed
        api.cssEase = cssEase

        $scope.currentSlide = idToSlideIndex($scope.slides, $routeParams.slide)

        $scope.carousel = api

        $scope.currentPosition = {}

        var timer;
        $document.on('scroll', function() {
          if (timer) {
            $timeout.cancel(timer)
          }

          timer = $timeout(function() {

            var markers = $element.find('.slide-marker')
            var scrollTop = window.scrollY
            var idx = 0
            var element
            // TODO: Trigger zur nächsten Slide, wenn Marker am unteren Rand des Viewports ist
            while(!element && scrollTop > 0 && idx < markers.length) {
              var markerTop = markers[idx].offsetTop

              if (markerTop >= scrollTop) {
                element = $document.find('#slide-scroll-top-' + (idx))
                var nextSlideId = element.data('slideId')

                var nextSlide = idToSlideIndex(slides, nextSlideId)
                $log.info('decayed scrolling to', element, idx, 'next up', nextSlideId, nextSlide)
                $document.scrollTo(element, 0, 350, EasingFunctions.easeInCubic)
                $timeout(function() {

                  api.onBeforeChange()
                  $log.info('scrolled to', nextSlide, 'from', $scope.currentSlide)
                  $scope.currentSlide = nextSlide
                  api.onAfterChange()
                }, 350)
              }
              idx++
            }
            element = null


          }, 250);

        });

        $scope.slide = slides[$scope.currentSlide]
        $rootScope.$on('$routeUpdate', function(scope, next, current) {

        })

        // $rootScope.$on('$routeChangeStart', function(scope, next, current) {
        //   $log.info('route change start', next, current, scope)
        // })
    })
