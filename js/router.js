var app = angular.module('Router', []);
// Rutas
app.config(['$routeProvider', '$locationProvider',  function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.html'
        })  
        .when('/acceso', {
          controller: 'AccesoCtrl',
          templateUrl: 'templates/acceso.html'
        }) 
        .when('/perfil', {
          controller: 'PerfilCtrl',
          templateUrl: 'templates/perfil.html'
        })
        .when('/perfil/editar', {
          controller: 'EditarPerfilCtrl',
          templateUrl: 'templates/editarperfil.html'
        })
        .when('/mantenimiento', {
          controller: 'MantenimientoCtrl',
          templateUrl: 'templates/mantenimiento.html'
        })
        .when('/login', {
          controller: 'LoginCtrl',
          templateUrl: 'templates/login.html'
        })
        .when('/choferes', {
          controller: 'ChoferesCtrl',
          templateUrl: 'templates/choferes.html'
        })
        .when('/rutas', {
          controller: 'RutasCtrl',
          templateUrl: 'templates/rutas.html'
        })
        .when('/rutas/:id', {
          controller: 'RutasMasCtrl',
          templateUrl: 'templates/masrutas.html'
        })
        .when('/piezas', {
          controller: 'PiezasCtrl',
          templateUrl: 'templates/piezas.html'
        })
        .when('/piezas/:id', {
          controller: 'PiezasMasCtrl',
          templateUrl: 'templates/maspagos.html'
        })
        .when('/sensores', {
          controller: 'SensoresCtrl',
          templateUrl: 'templates/sensores.html'
        })
        .when('/mapa', {
          templateUrl: 'templates/mapa.html'
        })
        .when('/calendario', {
          controller: 'CalendarioCtrl',
          templateUrl: 'templates/calendario.html'
        })
        .when('/vehiculos', {
          controller: 'VehiculosCtrl',
          templateUrl: 'templates/vehiculos.html'
        })
        .when('/errorserver', {
          templateUrl: 'templates/errorserver.html'
        })
        .when('/errorvalidate', {
          templateUrl: 'templates/errorvalidate.html'
        }) 
        .when('/load/:id', {
          controller: 'ClientesLoadCtrl',
          templateUrl: 'templates/load.html'
        })
        .otherwise({ 
          redirectTo: '/'
        });
        //$locationProvider.html5Mode(true);
}]);