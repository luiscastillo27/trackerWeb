var app = angular.module('PiezasCtrl', []);

app.controller('PiezasCtrl',  ['$scope', 'restApi', '$location', 'auth',function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';
    $scope.npiezas = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoPiezas").fadeIn(0);
        $("#vNuevoPiezas").addClass('animated rubberBand'); 
    }

      
}]);

