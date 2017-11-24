var app = angular.module('LoginCtrl', []);

app.controller('LoginCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    if(!auth.hasToken()){
        $scope.pie = './templates/pie.html';
    	$scope.vacio =  function(){
    		$scope.login = {
    			email:undefined,
    			contrasena:undefined
    		}
    	}
        
    	$scope.login = function(){
            
    		var data = {
    			email: $scope.login.email,
    			contrasena: $scope.login.contrasena
    		}
    		$("#loadLogin").slideDown();
    		$("#errorServidor").slideUp();
    		$("#RedencialesInvalidas").slideUp();


    		restApi.call({
                method: 'post',
                url: 'usuarios/autenticar',
                data: data,
                response: function (resp) {   
                    $("#loadLogin").slideUp();
                    console.log(resp);
                    // if(resp.message == 'Haz ingresado correctamente'){
                    //     auth.setToken(resp.result);
                    //     $location.path('choferes');
                    // }
                    // if(resp.message == 'Credenciales no validas'){
                    //     $("#RedencialesInvalidas").slideDown();
                    // 	$scope.login.usuario = '';
                    // 	$scope.login.contrasena = '';	
                    // }
                },
                error: function (error) {
                    console.log(error);
                   //$location.path('load/errorserver');
                },
                validationError: function (validerror) {
                    console.log(validerror);
                    //$location.path('load/errorvalidate');
                }
            });

    	}

    
    } else {

        $scope.salir = function(){
            auth.logout();
        }

    }
      
}]);

