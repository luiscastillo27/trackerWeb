// var URLactual = window.location;
// if( URLactual == 'http://localhost/~Luis/terreno/angularjs/'){
//  window.location = "http://localhost/~Luis/terreno/angularjs/";
// }

var frontApp = angular.module('jimApp', ['ngRoute', 'Router', 'Services', 'ChoferesCtrl', 
   'LoginCtrl', 'RutasCtrl' ,'MantenimientoCtrl', 'PiezasCtrl', 'SensoresCtrl', 'VehiculosCtrl', 
   'FormsCtrl', 'PerfilCtrl', 'AccesoCtrl','EditarPerfilCtrl', 'ChoferesFormCtrl', 'RutasFormCtrl', 
   'MantenimientoFormCtrl', 'PiezasFormCtrl', 'SensoresFormCtrl', 'VehiculosFormCtrl'
  ]);

(function(){ 
    if(typeof(localStorage[API.token_name]) === 'undefined'){
        localStorage[API.token_name] = '';
    }
}());