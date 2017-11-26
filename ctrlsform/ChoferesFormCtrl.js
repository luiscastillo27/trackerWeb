var app = angular.module('ChoferesFormCtrl', []);

app.controller('ChoferesFormCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    $scope.clouse = function(){
        $(".alert").fadeOut(0);
        $(".modal-bg").fadeOut(500);
        $(".ventana").fadeOut(500);
    }

    //NUEVO USUARIO
	$scope.usuario = {
		email: undefined,
		rango: undefined,
		password: undefined
	}

	$scope.nuevoUsuario = function(){
		$(".alert").fadeOut(0);
		$("#loadRUsuario").fadeIn(0);
		var data = {
			email: $scope.usuario.email,
			rango: $scope.usuario.rango,
			password: $scope.usuario.password
		}

		//INSERTAR LOS DATOS
		restApi.call({
	        method: 'post',
	        url: 'usuarios/agregar',
	        data: data,
            response: function (resp) {   
	           
	            $("#loadRUsuario").fadeOut(0);
	            if(resp.mensaje == 'El usuario ha sido registrado con exito'){
	            	$scope.usuario.email = undefined;
	            	$scope.usuario.rango = undefined;
	            	$scope.usuario.password = undefined;
					$("#exitoRegistrarClientep").fadeIn(0);
	            }

	            if(resp.mensaje == 'Usuario ya existe'){
	           		$scope.usuario.email = undefined;
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
	$scope.conformDeleteUsuario = function(select){
		
		//ELIMINAR
		if(select == 1){

			var id  = localStorage["id"];
			$(".alert").fadeOut(0);
			$("#loadDelete").fadeIn(0);

			restApi.call({
		        method: 'delete',
		        url: 'usuarios/eliminar/' + id ,
	            response: function (resp) {   
		           	console.log(resp);
		           	$("#loadDelete").fadeOut(0);
		           	if(resp.mensage == 'Se ha eliminado con exito'){
		           		$("#deleteRegistrar").fadeIn(0);
		           	} 
		           	if(resp.mensage == 'EL usuario no se encuentra en la db'){
		           		$("#deleteWaringRegistrar").fadeIn(0);
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
			$("#vDeleteChofer").fadeOut(0);
		}

	}

	//ACTUALIZAR USUARIO
	$scope.editarUsuario = function(){

		var id  = localStorage["id"];
		$(".alert").fadeOut(0);
		$("#loadACliente").fadeIn(0);
		var data = {
			email: document.getElementById("ursemail").value,
			rango: document.getElementById("ursrango").value
		}

		restApi.call({
		    method: 'put',
		    url: 'usuarios/actualizar/' + id ,
		    data: data,
	        response: function (resp) {   
		        console.log(resp);
		        $("#loadACliente").fadeOut(0);
		        if(resp.mensage == 'Se ha actualizado con exito'){
		           	$("#exitoActualizarCliente").fadeIn(0);
		        } 
		        if(resp.mensage == 'EL usuario no se encuentra en la db'){
		           	$("#waringActualizarCliente").fadeIn(0);
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

