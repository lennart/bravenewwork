'use strict';

app
    .controller('PlacesCtrl', function($rootScope, $scope, $sce, $routeParams, StoryBoard, $log, $window, $element, $location, $timeout, Geolocation) {
        var slides = $scope.slides = StoryBoard()
        var playlist = $scope.audioPlaylist = [
        ];


        // $scope.slides = []
        //
        var audioMapping = {

        }

        function slideIndexToPlaylist(index) {
          return audioMapping[index]
        }


        $scope.resolvePlaylistIndex = slideIndexToPlaylist

        function addTrack(track, index) {
          audioMapping[index] = playlist.length
          $scope.audioPlaylist.push({
            src: track
          })
        }

        angular.forEach(slides, function(slide, idx) {
          if (slide.audio) {
            addTrack(slide.audio, idx)
          }
        });
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
                    $location.search({
                        'slide': id
                    }).replace()

                    $rootScope.$emit('audio:play:' + $scope.currentSlide)
                }
            }, speed);
        }

        $scope.$on('scroll:next', function(event, index) {
          $log.info('[places] scroll:next ', index)
          var slide = slides[index],
          underground = slide.underground
          if (underground && underground.url) {
            $log.debug('[places] going deeper from', slide.id, 'to', underground.url)
            $location.path(underground.url)
          }
          else {
            $log.debug('[places] can\'t find a way deeper into', slide)
          }
        })

        $scope.$on('scroll:prev', function(event, index) {
          $log.info('[places] scroll:prev ', index)
        })

        $scope.$on('scroll:show', function(event, index) {
          $log.info('[places] scroll:show ', index)
        })

        api.speed = speed
        api.cssEase = cssEase

        $scope.currentSlide = idToSlideIndex($scope.slides, $routeParams.slide)

        $scope.carousel = api

        $scope.currentPosition = {}


    })
