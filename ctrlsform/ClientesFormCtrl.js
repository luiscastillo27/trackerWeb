var app = angular.module('ClientesFormCtrl', []);

app.controller('ClientesFormCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', '$rootScope', function ($scope, restApi, $location, auth, locStr, $rootScope) {

	console.log("ClientesFormCtrl");
    
    $scope.clouse = function(){
        $(".modal-bg").fadeOut(500);
        $(".ventana").fadeOut(500);
    }

}]);

