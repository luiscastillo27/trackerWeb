var app = angular.module('ChoferesCtrl', []);

app.controller('ChoferesCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

	auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    $scope.nchofer = function(){
		$(".modal-bg").fadeIn(0);
		$("#vNuevoChofer").fadeIn(0);
        $("#vNuevoChofer").addClass('animated rubberBand'); 
	}


}]);

