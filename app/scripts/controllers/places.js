'use strict';

app
  .controller('PlacesCtrl', function($scope, $routeParams, StoryBoard, $log, $window, $element, $location) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = StoryBoard();
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    // slides.push({
    //   image: 'http://placekitten.com/' + newWidth + '/300',
    //   text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //     ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    // });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  $log.info('slides', slides);


  // $scope.onAfterChange = function() {
  //   $log.info('slide changed', $scope.currentIndex);
  // }
  //
  // $location.search('slide', "siebzehn");
  $scope.$on('$locationChangeStart', function(event, next, current) {
    var slide = $location.search('slide');
    $log.info('location change', next, current, slide);
    $scope.currentSlide = parseInt(slide) || 0;
    $log.info('current slide', $scope.currentSlide);
  });
  var search = $location.search()

  $log.info('route search', search)

  var match = $scope.slides.filter(function(x) {
    return x.id == $routeParams.slide
  })

  if (match[0]) {
    $log.info('matching slide', match[0]);
    $scope.currentSlide = $scope.slides.indexOf(match[0]);
  }
  else {
    $scope.currentSlide = 0
  }
  // $scope.currentSlide = $location.search('slide') || 0;
});
