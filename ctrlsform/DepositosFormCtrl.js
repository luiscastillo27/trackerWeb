var app = angular.module('DepositosFormCtrl', []);

app.controller('DepositosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    console.log("DepositosFormCtrl");
    
	$scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

