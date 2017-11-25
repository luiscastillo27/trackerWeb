var app = angular.module('RutasCtrl', []);

app.controller('RutasCtrl',  ['$scope', 'restApi', '$location', 'auth',  function ($scope, restApi, $location, auth) {

    auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';

	
}]);

