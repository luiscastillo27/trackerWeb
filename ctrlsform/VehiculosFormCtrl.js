var app = angular.module('VehiculosFormCtrl', []);

app.controller('VehiculosFormCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

   
    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500); 
		$(".ventana").fadeOut(500);
	}

	
	$scope.vehiculos = [];
	restApi.call({
        method: 'get',
        url: 'usuarios/listar',
        response: function (resp) {   
            
            if(resp.length > 0){
            	$scope.vehiculos = resp;
            	console.log(resp);
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
 
 //NUEVO USUARIO
	$scope.vehiculo = {
		idUsuario: undefined,
		marca: undefined,
		modelo: undefined,
		matricula: undefined,
		tipo: undefined,
		anio: undefined
	}

	$scope.nuevoVehiculo = function(){
		$(".alert").fadeOut(0);
    	$("#loadRVehiculos").slideDown();
		var data = {
			idUsuario: $scope.vehiculo.idUsuario,
			marca: $scope.vehiculo.marca,
			modelo: $scope.vehiculo.modelo,
			matricula: $scope.vehiculo.matricula,
			tipo: $scope.vehiculo.tipo,
			anio: $scope.vehiculo.anio
		}

		//INSERTAR LOS DATOS
		restApi.call({
	        method: 'post',
	        url: 'vehiculos/agregar',
	        data: data,
            response: function (resp) {   
	           
	           	console.log(resp);
	            $("#loadRVehiculos").slideUp();
	            if(resp.mensage == 'El vehiculo ha sido registrado con exito'){
	            	$scope.vehiculo.idUsuario = undefined;
	            	$scope.vehiculo.marca = undefined;
	            	$scope.vehiculo.modelo = undefined;
	            	$scope.vehiculo.matricula = undefined;
	            	$scope.vehiculo.tipo = undefined;
	            	$scope.vehiculo.anio = undefined;
					$("#exitoRegistrarVehiculos").slideDown();
	            }

	            if(resp.mensage == 'El vehiculo ya existe'){
	           		$scope.vehiculo.matricula = undefined;
	           		$("#waringAgregarVehiculos").slideDown();
	            }
	           
	        },
	        error: function (error) {
	            console.log(error);
	            $location.path('errorserver');
	        },
	        validationError: function (validerror) {
	            console.log(validerror);
	            $location.path('errorvalidate');
	        }
	    });

	}

	//ELIMINAR USUARIOS
	$scope.conformDeleteVehiculos = function(select){
		
		//ELIMINAR
		if(select == 1){

			var id  = localStorage["id"];
			$(".alert").fadeOut(0);
			$("#loadDeleteVehiculos").slideDown(0);
		
			restApi.call({
		        method: 'delete',
		        url: 'vehiculos/eliminar/' + id ,
	            response: function (resp) {   
		           	
		           	console.log(resp);
		           	$("#loadDeleteVehiculos").slideUp(0);
		           	if(resp.mensage == 'Se ha eliminado con exito'){
		           		$("#exitoDeleteVehiculos").slideDown(0);
		           	} 
		           	if(resp.mensage == 'EL vehiculo no se encuentra en la db'){
		           		$("#deleteWaringDeleteVehiculos").slideDown(0);
		           	}
		        },
		        error: function (error) {
		            console.log(error);
		            $location.path('errorserver');
		        },
		        validationError: function (validerror) {
		            console.log(validerror);
		            $location.path('errorvalidate');
		        }
		    }); 

			
		}
		//NO ELIMINAR
		if(select == 0){
			$(".modal-bg").fadeOut(500);
			$("#vDeleteChofer").fadeOut(0);
		}

	}

	//ACTUALIZAR USUARIO
	$scope.editarVehiculo = function(){

		var id  = localStorage["id"];
		$(".alert").fadeOut(0);
		$("#loadAVehiculo").fadeIn(0);
		var data = {
			idUsuario: document.getElementById("ursidUser").value,
			marca: document.getElementById("ursmarca").value,
			modelo: document.getElementById("ursmodelo").value,
			matricula: document.getElementById("ursmatricula").value,
			tipo: document.getElementById("urstipo").value,
			anio: document.getElementById("ursanio").value,
		}

		restApi.call({
		    method: 'put',
		    url: 'vehiculos/actualizar/' + id ,
		    data: data,
	        response: function (resp) {   
		        
		        $("#loadAVehiculo").fadeOut(0);
		        if(resp.mensage == 'Se ha actualizado con exito'){
		           	$("#exitoActualizarVehiculo").fadeIn(0);
		        } 
		        if(resp.mensage == 'EL usuario no se encuentra en la db'){
		           	$("#waringActualizarVehiculo").fadeIn(0);
		        }
		    },
		    error: function (error) {
		        console.log(error);
		        $location.path('errorserver');
		    },
		    validationError: function (validerror) {
		        console.log(validerror);
		        $location.path('errorvalidate');
		    }
		});

	}

}]);

