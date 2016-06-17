var app = angular.module('ionicApp', ['ionic', 'ionic-datepicker']);

app.controller('datepickerCtrl', function($scope){

    $scope.currentDate = new Date();
    $scope.minDate = new Date(2005, 6, 1);
    $scope.maxDate = new Date(2016, 6, 13);

	$scope.datePickerCallback = function (val) {
	    if (!val) { 
	        console.log('Date not selected');
	    } else {
	        $scope.currentDate = val;
	    }
	};
});