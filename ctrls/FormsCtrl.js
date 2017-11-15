var app = angular.module('FormsCtrl', []);

app.controller('FormsCtrl',  ['$scope', function ($scope) {

	$scope.choferesV      = "./formularios/choferes.ventana.html";
	$scope.rutasV    = "./formularios/rutas.ventana.html";
	$scope.mantenimientoV    = "./formularios/mantenimiento.ventana.html";
	$scope.masrutasV = "./formularios/mas-rutas.ventana.html";
	$scope.vehiculosV     = "./formularios/vehiculos.ventana.html";
	$scope.piezasV        = "./formularios/piezas.ventana.html";
	$scope.sensoresV    = "./formularios/sensores.ventana.html";
	$scope.calendarioV       = "./formularios/calendario.ventana.html";

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

