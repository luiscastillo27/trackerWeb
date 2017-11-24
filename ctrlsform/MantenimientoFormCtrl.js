var app = angular.module('MantenimientoFormCtrl', []);

app.controller('MantenimientoFormCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    
    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
   

}]);

