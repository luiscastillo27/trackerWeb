var app = angular.module('MantenimientoCtrl', []);

app.controller('MantenimientoCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr', function ($scope, restApi, $location, auth, locStr) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    $scope.nmantenimiento = function(){
        $(".modal-bg").fadeIn(0);
        $("#vMantenimiento").fadeIn(0);
        $("#vMantenimiento").addClass('animated rubberBand'); 
    }
    
}]);

