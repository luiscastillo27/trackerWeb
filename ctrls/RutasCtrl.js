var app = angular.module('RutasCtrl', []);

app.controller('RutasCtrl',  ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';

	
}]);

