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

        $scope.nextSlideId = indexToSlideId($scope.slides, $scope.currentSlide + 1);
        $scope.prevSlideId = indexToSlideId($scope.slides, $scope.currentSlide - 1);

        $scope.slide = slides[$scope.currentSlide]
        $rootScope.$on('$routeUpdate', function(scope, next, current) {

        })

        // $rootScope.$on('$routeChangeStart', function(scope, next, current) {
        //   $log.info('route change start', next, current, scope)
        // })
    })
