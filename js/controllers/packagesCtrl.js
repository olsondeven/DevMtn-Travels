angular.module('devmtnTravel').controller('packagesCtrl', function($scope,$stateParams,mainSrv){
  $scope.packagesInfo = function(){
    $scope.travelPackages = mainSrv.travelInfo;
  };
  $scope.packagesInfo();
});
