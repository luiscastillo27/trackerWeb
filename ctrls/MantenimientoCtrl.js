var app = angular.module('MantenimientoCtrl', []);

app.controller('MantenimientoCtrl', ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
	var rang = auth.getUserData().rango;
	auth.redirectIfNotAdmin(rang);
	$scope.vacio = true;
	$scope.cargando = true;
    $scope.pie = './templates/pie.html';
    

    $scope.nmantenimiento = function(){
        $(".modal-bg").fadeIn(0);
        $("#vMantenimiento").fadeIn(0);
    }

   //LISTAR TODOS LOS USUARIOS
    $scope.mantenimientos = [];
    restApi.call({
        method: 'get',
        url: 'mantenimiento/listarTodos',
        response: function (resp) {   
            if(resp.data.length > 0){
                $scope.mantenimientos = resp.data;
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
    $scope.editMantenimiento = function(id){
        $(".modal-bg").fadeIn(0);
        $("#vEditarMantenimiento").fadeIn(0);
        localStorage["id"] = id;

        //OBTENER DATOS PARA MOSTRAR EN EL FORMULARIO
        restApi.call({
            method: 'get',
            url: 'mantenimiento/obtenerTodos/' + id,
            response: function (resp) {   
                if(resp.mensage == 'Peticion hecha correctamente'){
                    document.getElementById("mantVehiculo").value = resp.data[0]["idVehiculo"];
                    document.getElementById("mantCoordenada").value = resp.data[0]["idCoordenada"];
                    document.getElementById("mantInicio").value = resp.data[0]["fechaI"];
                    document.getElementById("mantFin").value = resp.data[0]["fechaT"];
                    document.getElementById("mantPuesto").value = resp.data[0]["tipo"];
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

    //ABRIR VENTANA PARA ELIMINAR USUARIO
    $scope.deletemantenimiento = function(id){
        $(".modal-bg").fadeIn(0);
        $("#vDeleteMante").fadeIn(0);      
        localStorage["id"] = id;
    }


}]);

