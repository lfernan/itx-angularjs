'use strict';

describe('Controller: CreateDepartmentCtrl', function () {

  // load the controller's module
  beforeEach(module('itxApp'));

  var CreateDepartmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateDepartmentCtrl = $controller('CreateDepartmentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreateDepartmentCtrl.awesomeThings.length).toBe(3);
  });
});
