var app = angular.module('PagoMasFormCtrl', []);

app.controller('PagoMasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', '$routeParams', function ($scope, restApi, $location, auth, locStr, $routeParams) {

    console.log("PagoMasFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
      
}]);

