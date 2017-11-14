var app = angular.module('PerfilCtrl', []);

app.controller('PerfilCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

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
    
    $scope.ncliente = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoCln").fadeIn(0);
        $("#vNuevoCln").addClass('animated rubberBand'); 
    }
    
      
}]);

