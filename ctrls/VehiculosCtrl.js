var app = angular.module('VehiculosCtrl', []);

app.controller('VehiculosCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    $scope.nvehiculo = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoVehiculo").fadeIn(0);
        $("#vNuevoVehiculo").addClass('animated rubberBand'); 
    }

}]);

