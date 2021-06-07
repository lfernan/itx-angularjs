'use strict';

/**
 * @ngdoc overview
 * @name itxApp
 * @description
 * # itxApp
 *
 * Main module of the application.
 */
angular
  .module('itxApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/create-department', {
        templateUrl: 'views/create-department.html',
        controller: 'CreateDepartmentCtrl',
        controllerAs: 'createDepartment'
      })
      .when('/create-employee', {
        templateUrl: 'views/create-employee.html',
        controller: 'CreateEmployeeCtrl',
        controllerAs: 'createEmployee'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
