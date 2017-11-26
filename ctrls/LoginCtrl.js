var app = angular.module('LoginCtrl', []);

app.controller('LoginCtrl',  ['$scope', 'restApi', '$location', 'auth', function ($scope, restApi, $location, auth) {

    if(!auth.hasToken()){
        $scope.pie = './templates/pie.html';
    	$scope.vacio =  function(){
    		$scope.login = {
    			email:undefined,
    			password:undefined
    		}
    	}
        
    	$scope.login = function(){
            
    		var data = {
    			email: $scope.login.email,
    			password: $scope.login.password
    		}
            $(".alert").fadeOut(0);
    		$("#loadLogin").slideDown();
    		$("#errorServidor").slideUp();
    		$("#RedencialesInvalidas").slideUp();


    		restApi.call({
                method: 'post',
                url: 'usuarios/autenticar',
                data: data,
                response: function (resp) {   
                    $("#loadLogin").slideUp();
                    if(resp.mensage == 'Haz ingresado correctamente'){
                        
                        if(resp.rango == 1){
                            auth.setToken(resp.token);
                            $location.path('choferes');
                        } else {
                            $("#RangoInvalido").slideDown();
                            $scope.login.email = '';
                            $scope.login.password = '';
                        }

                    }
                    if(resp.mensage == 'Credenciales no validas'){
                        $("#RedencialesInvalidas").slideDown();
                    	$scope.login.email = '';
                    	$scope.login.password = '';	
                    }
                    
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

