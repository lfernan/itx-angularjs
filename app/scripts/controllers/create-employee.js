'use strict';

/**
 * @ngdoc function
 * @name itxApp.controller:CreateEmployeeCtrl
 * @description
 * # CreateEmployeeCtrl
 * Controller of the itxApp
 */
angular.module('itxApp')
  .controller('CreateEmployeeCtrl', function ($scope, $http, $log) {
    $scope.employee = {};
    $scope.employeeList = {};
    $scope.salary = 0;
    $scope.name = '';

    var listEmployees = function () {
      $http.get('http://localhost:5000/api/employee').then(function (response) {
        $scope.status = response.status;
        $scope.employeeList = response.data;
      }, function (response) {
        $scope.data = response.data || 'Request failed';
        $scope.status = response.status;
      });
    };

    $scope.searchBySalary = function () {
      $http({
        url: 'http://localhost:5000/api/employee/salary',
        method: "GET",
        params: {
          salary: $scope.salary
        }
      }).then(function (response) {
        $scope.status = response.status;
        $scope.employeeList = response.data;
      }, function (response) {
        $scope.data = response.data || 'Request failed';
        $scope.status = response.status;
      });
    };

    $scope.searchByName = function () {
      $http({
        url: 'http://localhost:5000/api/employee/name',
        method: "GET",
        params: {
          name: $scope.name
        }
      }).then(function (response) {
        $scope.status = response.status;
        $scope.employeeList = [response.data];
      }, function (response) {       
        $scope.data = response.data || 'Request failed';
        $scope.status = response.status;
      });
    };

    listEmployees();

    $scope.createEmployee = function () {
      $log.info($scope.employee);

      var onSuccess = function (data, status, headers, config) {
        alert('Employee saved successfully.');
        listEmployees();
      };

      var onError = function (data, status, headers, config) {
        $log.info(data);
        alert('Error occured.');
      }

      $http.post('http://localhost:5000/api/createEmployee', $scope.employee).then(onSuccess, onError);
    };


  });
