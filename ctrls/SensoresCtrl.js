var app = angular.module('SensoresCtrl', []);

app.controller('SensoresCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
    $scope.pie = './templates/pie.html';
    $scope.nsensor = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoSensor").fadeIn(0);
        $("#vNuevoSensor").addClass('animated rubberBand'); 
    }
    
    
}]);

