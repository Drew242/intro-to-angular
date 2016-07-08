console.log('ready to party');

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName  = "Doe";
    $scope.lessons   = ['HTML5', 'CSS3', 'JavaScript',
                        'jQuery', 'Bootstrap', 'AnguarJS'];
});

app.directive('welcomeDirective', function() {
  return {
    template : "<h1 id='printed-name'>{{firstName + ' ' + lastName}}</h1>"
  }
})
