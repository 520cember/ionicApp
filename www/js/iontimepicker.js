var app = angular.module('timepickerCtrl', []);

app.controller('timepickerCtrl', function ($scope, ionicTimePicker) {

    $scope.selectedTime1;
    $scope.selectedTime2;

    $scope.openTimePicker1 = function () {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            $scope.selectedTime1 = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', $scope.selectedTime1.getUTCHours(), 'H :', $scope.selectedTime1.getUTCMinutes(), 'M');
          }
        },
        inputTime: 50400,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };

    $scope.openTimePicker2 = function () {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            $scope.selectedTime2 = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', $scope.selectedTime2.getUTCHours(), 'H :', $scope.selectedTime2.getUTCMinutes(), 'M');
          }
        },
        inputTime: ((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60),
        format: 24
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };


});
