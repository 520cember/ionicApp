var app = angular.module('ionicApp', ['ionic', 'ion-alpha-scroll', 'ionicApp.services']);
app.controller('AlphascrollCtrl', ['$scope','Contacts',function($scope, Contacts){
    $scope.contacts = Contacts.all();
    
}]);