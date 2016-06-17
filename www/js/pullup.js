var app = angular.module('ionicApp', ['ionic', 'ionic-pullup']);

app.controller('pullupCtrl', function($scope){
	 $scope.footerExpand = function() {
	    console.log('Footer expanded');
	  };
	  $scope.footerCollapse = function() {
	    console.log('Footer collapsed');
	  };
});