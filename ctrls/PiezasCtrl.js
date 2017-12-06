var app = angular.module('PiezasCtrl', []);


app.controller('PiezasCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {


    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
	$scope.vacio = true;
	$scope.cargando = true;
    $scope.pie = './templates/pie.html';

    $scope.npiezas = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoPiezas").fadeIn(0);   
    }

//LISTAR TODOS LOS USUARIOS 
	$scope.piezas = [];
	restApi.call({
        method: 'get',
        url: 'piezas/listar',
        response: function (resp) {   
            
            if(resp.length > 0){
            	$scope.piezas = resp;
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
	$scope.editpiezas = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vEditPieza").fadeIn(0);
		localStorage["id"] = id;

		//OBTENER DATOS PARA MOSTRAR EN EL FORMULARIO
		restApi.call({
	        method: 'get',
	        url: 'piezas/obtener/' + id,
	        response: function (resp) {     
	           document.getElementById("ursnombre").value = resp[0]["nombre"];
	           document.getElementById("ursstock").value = resp[0]["stock"];
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
	$scope.deletepiezas = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vDeletePiezas").fadeIn(0);		
		localStorage["id"] = id;
	}


}]);

