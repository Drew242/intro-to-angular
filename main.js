console.log('ready to party');

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName  = "Doe";
    $scope.lessons   = ['HTML5', 'CSS3', 'JavaScript',
                        'jQuery', 'Bootstrap', 'AnguarJS',];
    $scope.none      = false;
    $scope.isPink    = false;
    $scope.newName = function() {
      document.getElementById('newName').innerHTML = "New Name: " + $scope.firstName[0] + "-Rock " + $scope.lastName[0] + "izzle";
    }

    $scope.boolChange = function() {
      $scope.none = !$scope.none;
    }
    $scope.colorChange = function() {
      console.log('wtf');
      $scope.isPink = !$scope.isPink;
    }
});

app.directive('welcomeDirective', function() {
  return {
    template : "<span>{{firstName + ' ' + lastName}}</span>"
  }
})
