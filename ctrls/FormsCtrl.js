var app = angular.module('FormsCtrl', []);

app.controller('FormsCtrl',  ['$scope', function ($scope) {

	$scope.clienteV      = "./formularios/choferes.ventana.html";
	$scope.depositosV    = "./formularios/rutas.ventana.html";
	$scope.empleadosV    = "./formularios/mantenimiento.ventana.html";
	$scope.pagosV        = "./formularios/piezas.ventana.html";
	$scope.terrenosV     = "./formularios/sensores.ventana.html";
	$scope.videosV       = "./formularios/vehiculos.ventana.html";

	$scope.abir = 0;
	$scope.btnMenu = function(id){
		var ventana_ancho = $(window).width();
        if(ventana_ancho < 1000){
            if(id === 0){
                $scope.abir = 1;
                $(".sidebar").animate({"left": "260px"});
            }
            if(id === 1){
                $scope.abir = 0;
                $(".sidebar").animate({"left": "-260px"});
            }
        }  
	}

}]);

