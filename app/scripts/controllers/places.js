'use strict';

app
  .controller('PlacesCtrl', function($scope, StoryBoard, $log, $window, $element) {
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


  $scope.onAfterChange = function() {
    $log.info('slide changed', $scope.currentIndex);
  }
});
