var app = angular.module('SensoresFormCtrl', []);

app.controller('SensoresFormCtrl', ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    $scope.clouse = function(){
    	$(".alert").fadeOut(0);
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	} 

	  //NUEVO USUARIO
	$scope.sensor = {
		stock: undefined,
		nombre: undefined
	}

	$scope.nuevoSensor = function(){
		$(".alert").fadeOut(0);
		$("#loadRSensor").fadeIn(0);
		var data = {
			stock: $scope.sensor.stock,
			nombre: $scope.sensor.nombre,
			
		}

		//INSERTAR LOS DATOS
		restApi.call({
	        method: 'post',
	        url: 'sensores/agregar',
	        data: data,
            response: function (resp) {   
	           
	            $("#loadRSensor").fadeOut(0);
	            if(resp.mensage == 'El sensor ha sido registrado con exito'){
	            	$scope.sensor.stock = undefined;
	            	$scope.sensor.nombre = undefined;
					$("#exitoRegistrarSensorp").fadeIn(0);
	            }

	            if(resp.mensage == 'sensor ya existe'){
	           		$scope.sensor.nombre = undefined;
	           		
	           		$("#waringRegistrarMza").fadeIn(0);
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
	$scope.conformDeleteSensor = function(select){
		
		//ELIMINAR
		if(select == 1){

			var id  = localStorage["id"];
			$(".alert").fadeOut(0);
			$("#loadDelete").fadeIn(0);

			restApi.call({
		        method: 'delete',
		        url: 'sensores/eliminar/' + id ,
	            response: function (resp) {   
		           	console.log(resp);
		           	$("#loadDelete").fadeOut(0);
		           	if(resp.mensaje == 'Se ha eliminado con exito'){
		           		$("#deleteSensorp").fadeIn(0);
		           	} 
		           	if(resp.mensaje == 'EL sensor no se encuentra en la db'){
		           		$("#deleteWaringSensor").fadeIn(0);
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

			console.log("eliminando");
		}
		//NO ELIMINAR
		if(select == 0){
			$(".modal-bg").fadeOut(500);
			$("#vDeleteSensor").fadeOut(0);
		}

	}

	//ACTUALIZAR USUARIO
	$scope.editarSensor = function(){

		var id  = localStorage["id"];
		$(".alert").fadeOut(0);
		$("#loadUSensor").fadeIn(0);
		var data = {
			nombre: document.getElementById("ursnombresentor").value,
			stock: document.getElementById("ursstocksensor").value
		}

		restApi.call({
		    method: 'put',
		    url: 'sensores/actualizar/' + id ,
		    data: data,
	        response: function (resp) {   
		   
		        $("#loadUSensor").fadeOut(0);
		        if(resp.mensage == 'Se ha actualizado con exito'){
		           	$("#exitoActualizarSensor").fadeIn(0);
		        } 
		        if(resp.mensage == 'El sensor no se encuentra en la db'){
		           	$("#waringActualizarSensor").fadeIn(0);
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