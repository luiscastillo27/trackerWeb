var app = angular.module('VehiculosCtrl', []);

app.controller('VehiculosCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
	$scope.vacio = true;
	$scope.cargando = true;
    $scope.pie = './templates/pie.html';

    $scope.nvehiculo = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoVehiculo").fadeIn(0);
    }

	//LISTAR TODOS LOS USUARIOS
	$scope.vehiculos = [];
	restApi.call({
        method: 'get',
        url: 'vehiculos/listar',
        response: function (resp) {   
            
            if(resp.length > 0){
            	$scope.vehiculos = resp;
            	$scope.cargando = false;
            	$scope.vacio = false;
            } 
        },
        error: function (error) {
            console.log(error);
            $location.path('load/errorserver');
        },
        validationError: function (validerror) {
            console.log(validerror);
            $location.path('load/errorvalidate');
        }
    });


	//ABRIR VENTANA PARA EDITAR USUARIO
	$scope.editvehiculos = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vEditVehiculo").fadeIn(0);
		localStorage["id"] = id;

		//OBTENER DATOS PARA MOSTRAR EN EL FORMULARIO
		restApi.call({
	        method: 'get',
	        url: 'vehiculos/obtener/' + id,
	        response: function (resp) {  
	        	console.log(resp);   
	        	document.getElementById("ursidUser").value = resp[0]["idUsuario"];
	        	document.getElementById("ursmarca").value = resp[0]["marca"];
	        	document.getElementById("ursmodelo").value = resp[0]["modelo"];
	        	document.getElementById("ursmatricula").value = resp[0]["matricula"];
	        	document.getElementById("urstipo").value = resp[0]["tipo"];
	        	document.getElementById("ursanio").value = resp[0]["anio"];
	        },
	        error: function (error) {
	            console.log(error);
	            $location.path('load/errorserver');
	        },
	        validationError: function (validerror) {
	            console.log(validerror);
	            $location.path('load/errorvalidate');
	        }
	    });
	}

	//ABRIR VENTANA PARA ELIMINAR USUARIO
	$scope.deletevehiculos = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vDeleteVehivulos").fadeIn(0);		
		localStorage["id"] = id;
		console.log(id);
	}


}]);



