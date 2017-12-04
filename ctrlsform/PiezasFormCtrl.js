var app = angular.module('PiezasFormCtrl', []);

app.controller('PiezasFormCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

   
    $scope.clouse = function(){
    	$(".alert").fadeOut(0);
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}

//NUEVA PIEZA
	$scope.pieza = {
		stock: undefined,
		nombre: undefined
	}

	$scope.nuevaPieza = function(){
		$(".alert").fadeOut(0);
		$("#loadPieza").fadeIn(0);
		var data = {
			stock: $scope.pieza.stock,
			nombre: $scope.pieza.nombre
		}

		//INSERTAR LOS DATOS
		restApi.call({
	        method: 'post',
	        url: 'piezas/agregar',
	        data: data,
            response: function (resp) {   
	           
	            $("#loadPieza").fadeOut(0);
	            if(resp.mensaje == 'La pieza a sido agregada con éxito'){
	         	    $scope.pieza.stock = undefined;
	            	$scope.pieza.nombre = undefined;
	 				$("#exitoRegistrarPieza").fadeIn(0);
	            }

	            if(resp.mensaje == 'Usuario ya existe'){
	           		$scope.usuario.email = undefined;
	           		$("#waringRegistrarPieza").fadeIn(0);
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
	$scope.conformDeletePiezas = function(select){
		
		//ELIMINAR
		if(select == 1){

			var id  = localStorage["id"];
			$(".alert").fadeOut(0);
			$("#loadDelete").fadeIn(0);

			restApi.call({
		        method: 'delete',
		        url: 'piezas/eliminar/' + id ,
	            response: function (resp) {   
		           	console.log(resp);
		           	$("#loadDelete").fadeOut(0);
		           	if(resp.mensage == 'Se ha eliminado con exito'){
		           		$("#deletePiezas").fadeIn(0);
		           	} 
		           	if(resp.mensage == 'La pieza no se encuentra en la db'){
		           		$("#deleteWaringPiezas").fadeIn(0);
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
			$("#vDeletePiezas").fadeOut(0);
		}

	}

	//ACTUALIZAR USUARIO
	$scope.editarPieza = function(){

		var id  = localStorage["id"];
		$(".alert").fadeOut(0);
		$("#loadEPiezas").fadeIn(0);
		var data = {
			nombre: document.getElementById("ursnombre").value,
			stock: document.getElementById("ursstock").value
		}

		restApi.call({
		    method: 'put',
		    url: 'piezas/actualizar/' + id ,
		    data: data,
	        response: function (resp) {   
		        console.log(resp);
		        $("#loadEPiezas").fadeOut(0);
		        if(resp.mensage == 'Se ha actualizado con exito'){
		           	$("#exitoActualizarPieza").fadeIn(0);
		        } 
		        if(resp.mensage == 'La pieza no se encuentra en la db'){
		           	$("#waringEditarPiezas").fadeIn(0);
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

