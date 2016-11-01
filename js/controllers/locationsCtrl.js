angular.module('devmtnTravel').controller('locationsCtrl', function($scope,$stateParams,mainSrv){
  $scope.travelInfo = function(){
    $scope.travelLocations = mainSrv.travelInfo;
  };
  $scope.travelInfo();
});
