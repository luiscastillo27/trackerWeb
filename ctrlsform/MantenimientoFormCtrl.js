var app = angular.module('MantenimientoFormCtrl', []);

app.controller('MantenimientoFormCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    
    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
   

}]);

