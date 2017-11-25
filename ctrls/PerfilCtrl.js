var app = angular.module('PerfilCtrl', []);

app.controller('PerfilCtrl',  ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    
      
}]);

