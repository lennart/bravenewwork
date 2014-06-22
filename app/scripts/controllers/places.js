'use strict';

app
    .controller('PlacesCtrl', function($rootScope, $scope, $sce, $routeParams, Places, $log, $window, $element, $location, $timeout, Geolocation, $document) {
        // var slides = $scope.slides = StoryBoard()




        $scope.nextSlideId = Places.indexToSlideId($scope.currentSlide + 1);
        $scope.prevSlideId = Places.indexToSlideId($scope.currentSlide - 1);


    })
