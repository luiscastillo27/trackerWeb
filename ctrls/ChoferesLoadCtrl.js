var app = angular.module('ChoferesLoadCtrl', []);

app.controller('ChoferesLoadCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', '$routeParams', function ($scope, restApi, $location, auth, locStr, $routeParams) {

	$scope.idParams = $routeParams.id; 
	if($scope.idParams === 'choferes'){
		$location.url('choferes');
	}
	if($scope.idParams === 'rutas'){
		$location.url('rutas');
	}
	if($scope.idParams === 'mantenimiento'){
		$location.url('mantenimiento');
	}
	if($scope.idParams === 'piezas'){
		$location.url('piezas');
	}
	if($scope.idParams === 'sensores'){
		$location.url('sensores');
	}
	if($scope.idParams === 'vehiculos'){
		$location.url('vehiculos');
	}
	if($scope.idParams === 'calendario'){
		$location.url('calendario');
	}
	if($scope.idParams === 'vehiculos'){
		$location.url('vehiculos');
	}
	if($scope.idParams === 'errorserver'){
		$location.url('errorserver');
	}
	if($scope.idParams === 'errorvalidate'){
		$location.url('errorvalidate');
	}
	

}]);

