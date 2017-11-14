var app = angular.module('PagosFormCtrl', []);

app.controller('PagosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    console.log("PagosFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
      
}]);

