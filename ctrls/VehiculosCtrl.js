var app = angular.module('VehiculosCtrl', []);

app.controller('VehiculosCtrl',  ['$scope', 'restApi', '$location', 'auth', '$routeParams', function ($scope, restApi, $location, auth,  $routeParams) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';

    // restApi.call({
 //        method: 'get',
 //        url: 'terrenos/listarDisponibles',
 //        response: function (resp) { 
 //         $scope.listaDisponibles = resp; 
 //        },
 //        error: function (error) {
 //            console.log(error);
 //            $location.path('load/errorserver');
 //        },
 //        validationError: function (validerror) {
 //            console.log(validerror);
 //            $location.path('load/errorvalidate');
 //        }
 //    });
    
    $scope.nvehiculo = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoVehiculo").fadeIn(0);
        $("#vNuevoVehiculo").addClass('animated rubberBand'); 
    }
   
}]);

