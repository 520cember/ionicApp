var app = angular.module('ionicApp', ['ionic', 'ti-segmented-control']);
app.controller('SegmentedCtrl', function($scope){

    $scope.buttonClicked = function(index){
      $scope.selectedIndex = index;
      $scope.$apply();
    }
});