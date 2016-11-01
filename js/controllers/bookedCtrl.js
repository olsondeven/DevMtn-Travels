angular.module('devmtnTravel').controller('bookedCtrl', function($scope,$stateParams,mainSrv){

var id = $stateParams.id;

  $scope.correctObj = function(id){
    console.log(id);
    $scope.idObj = mainSrv.correctObj(id);
    console.log($scope.idObj);
  };

  $scope.correctObj(id);

});
