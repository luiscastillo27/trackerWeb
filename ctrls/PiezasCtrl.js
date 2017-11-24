var app = angular.module('PiezasCtrl', []);

app.controller('PiezasCtrl',  ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    $scope.npiezas = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoPiezas").fadeIn(0);
        $("#vNuevoPiezas").addClass('animated rubberBand'); 
    }

      
}]);

