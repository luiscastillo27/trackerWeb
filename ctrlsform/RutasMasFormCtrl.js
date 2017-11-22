var app = angular.module('RutasMasFormCtrl', []);

app.controller('RutasMasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', '$routeParams', function ($scope, restApi, $location, auth, $routeParams) {
   	
   console.log("RutasMasFormCtrl");

   	$scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

