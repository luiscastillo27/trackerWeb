// var URLactual = window.location;
// if( URLactual == 'http://localhost/~Luis/terreno/angularjs/'){
//  window.location = "http://localhost/~Luis/terreno/angularjs/";
// }

var frontApp = angular.module('jimApp', ['ngRoute', 'Router', 'Services', 
  'MenuCtrl', 'LoginCtrl', 'FormsCtrl', 'PerfilCtrl', 'AccesoCtrl'
  , 'EditarPerfilCtrl','CalendarioCtrl' ,'ChoferesCtrl','ChoferesLoadCtrl',
    'MantenimientoCtrl','PiezasCtrl','RutasCtrl','VehiculosCtrl','SensoresCtrl',
    'CalendarioFormCtrl','ChoferesFormCtrl','MantenimientoFormCtrl','PiezasFormCtrl',
    'VehiculosFormCtrl','RutasFormCtrl','RutasMasFormCtrl','SensoresFormCtrl' 
  ]);

(function(){ 
    if(typeof(localStorage[API.token_name]) === 'undefined'){
        localStorage[API.token_name] = '';
    }
    if(typeof(localStorage['idGlobal']) === 'undefined'){
        localStorage['idGlobal'] = '';
    }
}());