var app = angular.module('PerfilCtrl', []);

app.controller('PerfilCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    
      
}]);

