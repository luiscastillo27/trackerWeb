var app = angular.module('SensoresCtrl', []);

app.controller('SensoresCtrl', ['$scope', 'restApi', '$location', 'auth', 'locStr',  function ($scope, restApi, $location, auth, locStr) {

    //auth.redirectIfNotExists();
    $scope.pie = './templates/pie.html';
    $scope.nsensor = function(){
        $(".modal-bg").fadeIn(0);
        $("#vNuevoSensor").fadeIn(0);
        $("#vNuevoSensor").addClass('animated rubberBand'); 
    }
    
    
}]);

