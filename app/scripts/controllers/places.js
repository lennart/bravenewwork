'use strict';

app
    .controller('PlacesCtrl', function($scope, $routeParams, StoryBoard, $log, $window, $element, $location, $timeout) {
        var slides = $scope.slides = StoryBoard()
        var api = {}
        var speed = 300
        var cssEase = "ease-in"




        // $scope.$on('$locationChangeStart', function(event, next, current) {
        //     var slide = $location.search('slide')
        //     $log.info('location change', next, current, slide)
        //     $scope.currentSlide = parseInt(slide) || 0
        //     $log.info('current slide', $scope.currentSlide)
        // })

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
        }

        api.onAfterChange = function onAfterChange() {
            var id = indexToSlideId($scope.slides, $scope.currentSlide);
            if (id && $scope.lastSlide == $scope.currentSlide) {
              $log.info('slide changed', $scope.currentSlide, id, 'last slide', $scope.lastSlide);
              $timeout(function() {
                $location.search({ 'slide': id}).replace()
              }, speed);

            }
        }

        api.speed = speed
        api.cssEase = cssEase

        $scope.currentSlide = idToSlideIndex($scope.slides, $routeParams.slide)

        $scope.carousel = api
    })
