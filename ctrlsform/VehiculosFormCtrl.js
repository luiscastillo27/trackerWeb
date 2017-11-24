var app = angular.module('VehiculosFormCtrl', []);

app.controller('VehiculosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', 'restApiImg', function ($scope, restApi, $location, auth, locStr, restApiImg) {

   
    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
 

}]);

