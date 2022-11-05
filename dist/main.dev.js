"use strict";

var app = angular.module('myapp', []);
app.controller('myctrl', function ($scope, $http) {
  $scope.Listmatch = [];
  $http.get("./Pulic/Data/data.json").then(function (res) {
    $scope.Listmatch = res.data;
    console.log($scope.Listmatch);
  }, function (res) {
    alert('Error');
  });
});