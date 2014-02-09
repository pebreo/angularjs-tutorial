'use strict';

/* Controllers */
/*
 To use $http, you must run:
   node scripts/web-server.js
 and goto:
  localhost:8000/apps/index.html
*/


var phonecatControllers = angular.module('phonecatControllers', []);

// register controller
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('phones/phones.json').success(function(data) {
            $scope.phones = data;
        });
        $scope.orderProp = 'age';

}]);

// register controller
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
        });
        
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
}]);