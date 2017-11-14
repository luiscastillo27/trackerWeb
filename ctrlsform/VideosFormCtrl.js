var app = angular.module('VideosFormCtrl', []);

app.controller('VideosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', 'restApiImg', function ($scope, restApi, $location, auth, locStr, restApiImg) {

    console.log("VideosFormCtrl");

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

}]);

