var app = angular.module('MenuCtrl', []);

app.controller('MenuCtrl',  ['$scope', 'auth', function ($scope, auth) {

	$scope.loadmenu = function(){

		$scope.Clientes = true;
		$scope.Depositos = true;
		$scope.Empleados = true;
		$scope.Pagos = true;
		$scope.Terrenos = true;
		$scope.Recursos = true;
		$scope.Mapa = true;

	}

}]);

