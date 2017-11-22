var app = angular.module('VehiculosFormCtrl', []);

app.controller('VehiculosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', '$routeParams', function ($scope, restApi, $location, auth, $routeParams) {

    console.log("VehiculosFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
      
}]);

