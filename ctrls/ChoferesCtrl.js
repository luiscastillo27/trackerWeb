var app = angular.module('ChoferesCtrl', []);

app.controller('ChoferesCtrl', ['$scope', 'restApi', '$location', 'auth',function ($scope, restApi, $location, auth) {

	//auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';

	// restApi.call({
 //        method: 'get',
 //        url: 'terrenos/listarDisponibles',
 //        response: function (resp) { 
 //        	$scope.listaDisponibles = resp; 
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
    
	$scope.nchofer = function(){
		$(".modal-bg").fadeIn(0);
		$("#vNuevoChofer").fadeIn(0);
        $("#vNuevoChofer").addClass('animated rubberBand'); 
	}
	

}]);

