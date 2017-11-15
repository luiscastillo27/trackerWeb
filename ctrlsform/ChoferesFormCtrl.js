var app = angular.module('ChoferesFormCtrl', []);

app.controller('ChoferesFormCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', '$rootScope', function ($scope, restApi, $location, auth, locStr, $rootScope) {

	console.log("ChoferesFormCtrl");
    
    $scope.clouse = function(){
        $(".modal-bg").fadeOut(500);
        $(".ventana").fadeOut(500);
    }
    

}]);

