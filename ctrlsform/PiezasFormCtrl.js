var app = angular.module('PiezasFormCtrl', []);

app.controller('PiezasFormCtrl',  ['$scope', 'restApi', '$location', 'auth',function ($scope, restApi, $location, auth) {

    console.log("PiezasFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
      
}]);

