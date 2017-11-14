var app = angular.module('DepositoMasFormCtrl', []);

app.controller('DepositoMasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', '$routeParams', function ($scope, restApi, $location, auth, locStr, $routeParams) {
   	
   console.log("DepositoMasFormCtrl");

   	$scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

