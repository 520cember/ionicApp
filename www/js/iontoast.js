var app = angular.module('ionicApp', ['ionic', 'ionic-toast']);

app.controller('toastCtrl',['$scope', 'ionicToast', function($scope, ionicToast) {

    $scope.showToastTop = function(){
      alert(111);
      ionicToast.show('This is a toast at the top.', 'top', true, 2000);
    };

    $scope.showToastMiddle = function(){
      ionicToast.show('This is a toast at the middle.', 'middle',false, 1000);
    };

    $scope.showToastBottom = function(){
      ionicToast.show('This is a toast at the bottom.', 'bottom',false, 2000);
    };

  }]);