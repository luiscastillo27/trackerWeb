var app = angular.module('MenuCtrl', []);

app.controller('MenuCtrl',  ['$scope', 'auth', function ($scope, auth) {

	$scope.loadmenu = function(){

		$scope.Choferes = true;
		$scope.Rutas = true;
		$scope.Mantenimiento = true;
		$scope.Piezas = true;
		$scope.Sensores = true;
		$scope.Vehiculos = true;
		$scope.Calendario = true;

	}
	
	$scope.loadmenu();
}]);

