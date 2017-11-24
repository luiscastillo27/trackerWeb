var app = angular.module('RutasCtrl', []);

app.controller('RutasCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';

	
}]);

