angular.module('ionicApp', ['ionic','ionicLazyLoad'])


.controller('imglazyloadCtrl', function($scope) {
  // don't be scared by the image value, its just datauri
  
  $scope.items = [
    { id: 1, name: 'Cat 1', image: 'img/cat1.jpg' },
    { id: 2, name: 'Cat 2', image: 'img/cat2.jpg' },
    { id: 3, name: 'Cat 3', image: 'img/cat3.jpg' },
    { id: 4, name: 'Cat 4', image: 'img/cat4.jpg' },
    { id: 5, name: 'Cat 5', image: 'img/cat5.jpg' },
    { id: 6, name: 'Cat 6', image: 'img/cat6.jpg' },
    { id: 7, name: 'Cat 7', image: 'img/cat7.jpg' },
    { id: 8, name: 'Cat 8', image: 'img/cat8.jpg' },
    { id: 9, name: 'Cat 9', image: 'img/cat1.jpg' },
    { id: 10, name: 'Cat 10', image: 'img/cat2.jpg' },
    { id: 11, name: 'Cat 11', image: 'img/cat3.jpg' }
  ];
  
})
 
