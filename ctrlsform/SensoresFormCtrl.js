var app = angular.module('SensoresFormCtrl', []);

app.controller('SensoresFormCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    console.log("SensoresFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}    

}]);

