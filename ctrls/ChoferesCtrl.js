var app = angular.module('ChoferesCtrl', []);

app.controller('ChoferesCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

	auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
	$scope.vacio = true;
	$scope.cargando = true;
    $scope.pie = './templates/pie.html';

    //ABRIR VEBTANA DE NUEVO USUARIO 
    $scope.nchofer = function(){
		$(".modal-bg").fadeIn(0);
		$("#vNuevoChofer").fadeIn(0);
	}

	//LISTAR TODOS LOS USUARIOS
	$scope.choferes = [];
	restApi.call({
        method: 'get',
        url: 'usuarios/listar',
        response: function (resp) {   
            
            if(resp.length > 0){
            	$scope.choferes = resp;
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
	$scope.editchofer = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vEditChofer").fadeIn(0);
		localStorage["id"] = id;

		//OBTENER DATOS PARA MOSTRAR EN EL FORMULARIO
		restApi.call({
	        method: 'get',
	        url: 'usuarios/obtener/' + id,
	        response: function (resp) {     
	           document.getElementById("ursemail").value = resp[0]["email"];
	           document.getElementById("ursrango").value = resp[0]["rango"];
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
	$scope.deletechofer = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vDeleteChofer").fadeIn(0);		
		localStorage["id"] = id;
	}


}]);

