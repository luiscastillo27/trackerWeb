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
    $scope.deletemantenimiento = function(id){
        $(".modal-bg").fadeIn(0);
        $("#vDeleteChofer").fadeIn(0);      
        localStorage["id"] = id;
    }


}]);

