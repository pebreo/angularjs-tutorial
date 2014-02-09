'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

/*
 To use $http, you must run:
   node scripts/web-server.js
 and goto:
  localhost:8000/apps/index.html
*/

phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});