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
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', 
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';

}]);

// register controller
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
}]);