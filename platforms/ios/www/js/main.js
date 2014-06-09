app
.controller('MainCtrl', function($rootScope, $scope) {
  $rootScope.$watch('longitude', function(newLongitude) {
    $scope.longitude = newLongitude
  })
})