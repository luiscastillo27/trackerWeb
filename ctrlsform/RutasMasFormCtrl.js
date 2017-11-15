var app = angular.module('RutasMasFormCtrl', []);

app.controller('RutasMasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', '$routeParams', function ($scope, restApi, $location, auth, locStr, $routeParams) {
   	
   console.log("RutasMasFormCtrl");

   	$scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

