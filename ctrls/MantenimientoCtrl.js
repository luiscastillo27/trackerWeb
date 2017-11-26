var app = angular.module('MantenimientoCtrl', []);

app.controller('MantenimientoCtrl', ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';
    $scope.nmantenimiento = function(){
        $(".modal-bg").fadeIn(0);
        $("#vMantenimiento").fadeIn(0);
        $("#vMantenimiento").addClass('animated rubberBand'); 
    }
    
}]);

