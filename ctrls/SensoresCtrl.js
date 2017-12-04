var app = angular.module('SensoresCtrl', []);

app.controller('SensoresCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
	$scope.vacio = true;
	$scope.cargando = true;
    $scope.pie = './templates/pie.html';

    $scope.nsensor = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoSensor").fadeIn(0);
     }
     
    $scope.sensores = [];
	restApi.call({
        method: 'get',
        url: 'sensores/listar', 
        response: function (resp) {   
            
            if(resp.length > 0){
            	$scope.sensores = resp;
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
	$scope.editsensor = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vEditSensor").fadeIn(0);
		localStorage["id"] = id;

		//OBTENER DATOS PARA MOSTRAR EN EL FORMULARIO
		restApi.call({
	        method: 'get',
	        url: 'sensores/obtener/' + id,
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
	$scope.deletesensor = function(id){
		$(".modal-bg").fadeIn(0);
		$("#vDeleteSensor").fadeIn(0);		
		localStorage["id"] = id;
	}


}]);


    
    

