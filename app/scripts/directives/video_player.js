'use strict';

app

  .directive('bnwVideoPlayer', function($log) {

    return {
      restrict: 'E',
      scope: true,
      // controller: function($scope) {
      //   $log.info('current slide in player', $scope.slide.video);


      //   $scope.loadVideo = function() {
      //     $log.info('player', player);
      //     new(player)($scope.elementId, {
      //       height: '390',
      //       width: '640',
      //       videoId: $scope.slide.video
      //     });
      //   };

      //   // $scope.$on('player:ready', function(event, player) {
      //   //   $log.info('player ready to load video');
      //   // })


      // },
      // link: function(scope, element, attrs) {
      //   $log.debug('attributes', attrs);
      //   scope.elementId = attrs.id;


      //   // scope.$on('player:ready', function(event, player) {
      //   //   $scope.loadVideo(player);
      //   // })


      // }
      // compile: function compile(tElement, tAttrs) {
      //   tElement.html('<div id="ytplayer"></div>');
      //   return function postLink(scope, element, attrs, controller) {

      //     // Replace the 'ytplayer' element with an <iframe> and
      //     // YouTube player after the API code downloads.
      //     var player;
      //     $log.info('inside postlink', scope);
      //
      //   };
      // }
    };

  });
