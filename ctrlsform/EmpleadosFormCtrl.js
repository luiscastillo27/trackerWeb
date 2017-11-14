var app = angular.module('EmpleadosFormCtrl', []);

app.controller('EmpleadosFormCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

   console.log("EmpleadosFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

