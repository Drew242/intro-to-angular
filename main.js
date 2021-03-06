console.log('ready to party');

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName  = "Doe";
    $scope.lessons   = ['HTML5', 'CSS3', 'JavaScript',
                        'jQuery', 'Bootstrap', 'AnguarJS',];
    $scope.none      = false;
    $scope.isPink    = false;
    $scope.bang      = false;
    $scope.cancel    = true;
    $scope.modal     = false;
    $scope.newName = function() {
      document.getElementById('newName').innerHTML = "New Name: " + $scope.firstName[0] + "-Rock " + $scope.lastName[0] + "izzle";
    }

    $scope.boolChange = function() {
      $scope.none = !$scope.none;
    }
    $scope.colorChange = function() {
      $scope.isPink = !$scope.isPink;
    }
    $scope.confirmClick = function() {
      var answer = confirm("Are you sure?");
      if (answer == true) {
        //proceed
      } else {
        event.preventDefault();
        $scope.cancel = false;
      }
    }
    $scope.giantModal = function() {
      $scope.modal = !$scope.modal;
    }
    $scope.modalClose = function() {
      $scope.modal = false; 
    }
});

app.directive('welcomeDirective', function() {
  return {
    template : "<span>{{firstName + ' ' + lastName}}</span>"
  }
})
