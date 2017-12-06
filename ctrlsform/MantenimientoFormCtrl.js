var app = angular.module('MantenimientoFormCtrl', []);

app.controller('MantenimientoFormCtrl', ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    $scope.mostrarvehiculos = function(){
        $scope.vehiculos = [];
        restApi.call({
            method: 'get',
            url: 'vehiculos/listar',
            response: function (resp) {   
                    
                if(resp.length > 0){
                    $scope.vehiculos = resp;
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
    }

    $scope.mostrarmantenimientos = function(){
        $scope.coordenadas = [];
        restApi.call({
            method: 'get',
            url: 'coordenada/listar',
            response: function (resp) {   
                $scope.coordenadas = resp;   
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

    $scope.inicio = function(){
        $scope.mantenimiento = {
            idVehiculo: undefined,
            idCoordenada: undefined,
            fechaI: undefined,
            fechaT: undefined,
            tipo: undefined
        }
    }

    $scope.mostrarvehiculos();
    $scope.mostrarmantenimientos();
    $scope.inicio();

    $scope.guardarMantenimiento = function(){

        $(".alert").fadeOut(0);
        $("#load").slideDown();
        var data = {
            idVehiculo: $scope.mantenimiento.idVehiculo,
            idCoordenada: $scope.mantenimiento.idCoordenada, 
            fechaI: $scope.mantenimiento.fechaI,
            fechaT: $scope.mantenimiento.fechaT,
            tipo: $scope.mantenimiento.tipo
        }
     
        restApi.call({
            method: 'post',
            url: 'mantenimiento/agregar',
            data: data,
            response: function (resp) {  
                
                if(resp.mensage = 'El mantenimiento ha sido registrado con exito'){
                    $("#load").slideUp(); 
                    $("#exitoRegistrar").slideDown();
                    $scope.inicio();
                }

                if(resp.mensage = 'El mantenimiento ya existe'){
                    $("#load").slideUp(); 
                    $("#exitoRegistrar").slideDown();
                    $scope.mantenimiento.idVehiculo = undefined;
                    $scope.mantenimiento.idCoordenada = undefined;
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

    }

    $scope.editarMantenimiento = function(){

        var id = localStorage["id"];
        $(".alert").fadeOut(0);
        $("#load").slideDown();

        var data = {
            idVehiculo:  document.getElementById("mantVehiculo").value,
            idCoordenada: document.getElementById("mantCoordenada").value, 
            fechaI: document.getElementById("mantInicio").value,
            fechaT: document.getElementById("mantFin").value,
            tipo: document.getElementById("mantPuesto").value
        }
     
        restApi.call({
            method: 'put',
            url: 'mantenimiento/actualizar/' + id,
            data: data,
            response: function (resp) {  
                
                if(resp.mensage = 'Se ha actualizado con exito'){
                    $("#load").slideUp(); 
                    $("#exitoActualizar").slideDown();
                    $scope.inicio();
                }

                if(resp.mensage = 'EL mantenimiento no se encuentra en la db'){
                    $("#load").slideUp(); 
                    $("#existenteActualizar").slideDown();
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

    }

    $scope.conformDeleteUsuario = function(ok){
        
        if(ok == 1){
            var id = localStorage["id"];
            $(".alert").fadeOut(0);
            $("#loadDeleteMant").slideDown();

            restApi.call({
                method: 'delete',
                url: 'mantenimiento/eliminar/' + id,
                response: function (resp) {  
                    
                    console.log(resp.mensage);
                    if(resp.mensage == 'Se ha eliminado con exito'){
                        $("#loadDeleteMant").slideUp(); 
                        $("#deleteRegistrarMant").slideDown();
                    }

                    if(resp.mensage == 'El mantenimiento ya no existe'){
                        $("#loadDeleteMant").slideUp(); 
                        $("#deleteWaringRegistrarMant").slideDown();
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

        } else {
            $scope.clouse();
        }

    }

    $scope.clouse = function(){
	   	$(".modal-bg").fadeOut(500);
		$(".ventana").fadeOut(500);
	}
   

}]);

