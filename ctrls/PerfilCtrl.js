var app = angular.module('PerfilCtrl', []);

app.controller('PerfilCtrl',  ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';
    
      
}]);

