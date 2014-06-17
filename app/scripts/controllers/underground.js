'use strict';

app
.controller('UndergroundCtrl', function($log, $window, $document, $timeout, usSpinnerService) {

      $log.info('[underground] online')
      usSpinnerService.start('spinner-1')
      $timeout(function(){
        usSpinnerService.stop('spinner-1')
      },5000)

})
