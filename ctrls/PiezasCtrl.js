var app = angular.module('PiezasCtrl', []);

app.controller('PiezasCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

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
    
    $scope.npiezas = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoPiezas").fadeIn(0);
        $("#vNuevoPiezas").addClass('animated rubberBand'); 
    }
      
}]);

