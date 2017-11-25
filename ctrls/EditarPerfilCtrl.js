var app = angular.module('EditarPerfilCtrl', []);

app.controller('EditarPerfilCtrl',  ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';

      
}]);

