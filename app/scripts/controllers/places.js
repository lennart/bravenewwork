'use strict';

app
    .controller('PlacesCtrl', function($rootScope, $scope, $sce, $routeParams, StoryBoard, $log, $window, $element, $location, $timeout, Geolocation, $document) {
        var slides = $scope.slides = StoryBoard()


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

        $scope.currentSlide = idToSlideIndex($scope.slides, $routeParams.slide)

        $scope.changeSlide = function(id) {
            console.log(id);
        }

        $scope.nextSlide = function(id) {
          $log.info('[places] click:next ', id)
          var index = idToSlideIndex(slides, id)
          var slide = slides[index+1]

          if (slide) {
            $log.debug('[places] going to next slide', slide.id)
            // $rootScope.$emit('audio:stop:' + index);
            // $scope.slide = slide;

            // $location.path(slide.id);
             $location.path(slide.id) 
          }
          else {
            $log.debug('[places] there\'s no way further from', slides[index])
          }
        }

        $scope.prevSlide = function(id) {
          $log.info('[places] scroll:prev ', id)

          var index = idToSlideIndex(slides, id)
          var slide = slides[index-1]

          if (slide) {
            $log.debug('[places] going to prev slide', slide.id)
            // $scope.slide = slide;
            $location.path(slide.id);
          }
          else {
            $log.debug('[places] there\'s no way back from', slides[index])
          }
        }

        $scope.nextSlideId = indexToSlideId($scope.slides, $scope.currentSlide + 1);
        $scope.prevSlideId = indexToSlideId($scope.slides, $scope.currentSlide - 1);

        $scope.slide = slides[$scope.currentSlide]
        $rootScope.$on('$routeUpdate', function(scope, next, current) {
            console.log("route update", scope, next, current);
        })

        $rootScope.$emit('audio:play:' + $scope.currentSlide)

        // $rootScope.$on('$routeChangeStart', function(scope, next, current) {
        //   $log.info('route change start', next, current, scope)
        // })
    })
