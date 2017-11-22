var app = angular.module('RutasFormCtrl', []);

app.controller('RutasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    console.log("RutasFormCtrl");
    
	$scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

