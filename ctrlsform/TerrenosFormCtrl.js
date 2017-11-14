var app = angular.module('TerrenosFormCtrl', []);

app.controller('TerrenosFormCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr',  function ($scope, restApi, $location, auth, locStr) {

    console.log("TerrenosFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}    

}]);

