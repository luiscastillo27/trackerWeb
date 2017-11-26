var app = angular.module('VehiculosCtrl', []);

app.controller('VehiculosCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';
    $scope.nvehiculo = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoVehiculo").fadeIn(0);
        $("#vNuevoVehiculo").addClass('animated rubberBand'); 
    }

}]);

