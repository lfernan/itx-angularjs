'use strict';

/**
 * @ngdoc function
 * @name itxApp.controller:CreateDepartmentCtrl
 * @description
 * # CreateDepartmentCtrl
 * Controller of the itxApp
 */
angular.module('itxApp')
  .controller('CreateDepartmentCtrl', function ($scope, $http, $log) {
    $scope.department = {};

    $scope.createDeparment = function () {
      $log.info($scope.department);

      var onSuccess = function (data, status, headers, config) {
        alert('De saved successfully.');
      };

      var onError = function (data, status, headers, config) {
        alert('Error occured.');
      }

      $http.post('http://localhost:5000/api/createDepartment', $scope.department).then(onSuccess, onError);
    };

  });
